import { Service } from "@/app/models/models";
import Image from "next/image";
import Link from "next/link";

type AboutCardProps = {
    service: Service;
    containsImage: boolean;
}

export function AboutCard({ service, containsImage }: AboutCardProps) {
    return (
        <div className="flex flex-col items-center max-w-sm shadow-lg m-3 bg-white">
            {containsImage && (
                <Image
                    src={`/services_images/${service.imagePath}`}
                    alt={service.title}
                    width={350}
                    height={80}
                    className="object-fill"
                />
            )}
            <div className="px-6 pb-8 font-avenir">
                <div className="text-purple text-lg font-bold text-center py-3">{service.title}</div>
                <div className="text-purple text-center text-xs font-medium">{service.description}</div>
            </div>
        </div>
    );
}
