import Image from "next/image";
import { ComponentProps } from "react";

export interface Service {
    imagePath: ComponentProps<typeof Image>["src"],
    title: string,
    description: string,
}



export interface ServicesData {
    services: Service[];
}