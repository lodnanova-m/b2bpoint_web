import Image from "next/image";
import { ComponentProps } from "react";

export interface Service {
  imagePath: ComponentProps<typeof Image>["src"];
  title: string;
  description: string;
}

export interface ServicesData {
  services: Service[];
}

export interface Actuality {
  imagePath: ComponentProps<typeof Image>["src"];
  label: string;
  title: string;
  place: string;
  date: string;
  href: string;
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export interface ServiceDetail {
  id: number;
  title: string;
  imagePath: ComponentProps<typeof Image>["src"];
  description: string[];
}

export interface ServiceDatailData {
  serviceDetails: ServiceDetail[];
}
