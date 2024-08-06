'use server'

import { NextPage } from 'next'
import { readFile } from 'node:fs/promises';
import { ServiceDatailData } from '@/app/models/models';
import Image from 'next/image';


export async function getService(id: number) {
    // TODO: Zod validation to ensure the data is really what it is
    const result = JSON.parse(await readFile("./services_detail.json", { encoding: "utf-8" })) as ServiceDatailData
    return result.serviceDetails.find(service => service.id === id)
}

interface Props { params: { id: string } }
const ServiceDetail: NextPage<Props> = async ({ params: { id } }) => {
    const serviceData = await getService(parseInt(id));

    if (!serviceData) {
        return <div className="text-center m-4">
            Služba nenalezena
        </div>
    }


    return (<div className='flex flex-col items-center font-avenir text-purple mx-20'>
        <div className='text-purple text-2xl font-bold text-center m-10'>{serviceData.title}</div>
        {serviceData.imagePath !== "" &&
            <Image src={`/service_detail/${serviceData.imagePath}`} height={500} width={1200} alt={serviceData.title}></Image>
        }
        <ul className='my-10 md:mx-40'>
            {serviceData.description.map((text: string, index: number) => (
                <li
                    key={index}
                    className={`font-medium text-xl my-4 ${(text.endsWith('?') || text.endsWith('!') || text.endsWith(':')) ? 'text-center font-extrabold text-3xl py-4' : 'list-disc'}`}
                >
                    {text}
                </li>
            ))}
        </ul>
    </div>)
}

export default ServiceDetail