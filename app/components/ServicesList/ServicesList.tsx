import { Service, ServicesData } from '@/app/models/models';
import * as fs from 'fs';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import Link from 'next/link';

export function ServicesList() {
    const rawData = fs.readFileSync("./services.json", 'utf8');
    const servicesData: ServicesData = JSON.parse(rawData);
    return (
        <div className='flex flex-col px-40 pb-16'>
            <div className='text-purple text-2xl font-bold text-center'>Služby pro velkoobchodní partnery - Vaše podpora pro úspěch a růst</div>
            <div className='text-purple text-xs font-medium py-8'>Naše společnost se zaměřuje na podporu velkoobchodních podniků a jejich růst. Nabízíme širokou škálu služeb navržených tak, aby vám poskytly konkurenční výhodu a posílily vaše obchodní vztahy. Jsme připraveni stát se vaším spolehlivým partnerem a pomoci vám dosáhnout úspěchu ve vašem oboru.</div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col place-items-center items-start gap-6">
                {servicesData.services.map((service: Service, id: number) => (
                    <Link key={id} href={`/services/${id}`} className='flex flex-col items-center max-w-sm shadow-lg min-h-full hover:scale-105 transform transition duration-150'>
                        <ServiceCard
                            imagePath={service.imagePath}
                            title={service.title}
                            description={service.description}
                        />
                    </Link>
                ))}
            </div>
        </div>

    );
}