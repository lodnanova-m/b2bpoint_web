import { ServicesData } from "@/app/models/models";
import { ButtonLink } from "../buttons/ButtonLink";
import * as fs from 'fs';
import { AboutCard } from "../AboutCard/AboutCard";
import Link from "next/link";

export function About() {
    const rawData = fs.readFileSync("./services.json", 'utf8');
    const servicesData: ServicesData = JSON.parse(rawData);
    const exampleServices = []
    if (servicesData.services.length >= 4) {
        exampleServices.push(...servicesData.services.slice(0, 4));
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center">
                <div className="text-center text-purple font-avenir text-6xl font-semibold px-10">Váš partner pro úsporu nákladů a efektivní obchodování</div>
                <div className="text-center text-purple font-avenir text-2xl font-light py-5">Zjednodušte procesy, získejte nejlepší nabídky a prodávejte snadněji s B2Bpoint</div>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-blue bg-opacity-20 my-10 p-6">
                    <div className="text-purple items-start px-4 text-xl font-medium">Co Vám můžeme nabídnout</div>
                    <div className="grid place-items-center items-start py-4">
                        <div className="flex flex-row">{exampleServices[0] && <AboutCard service={exampleServices[0]} containsImage={false} />}
                            {exampleServices[2] && <AboutCard service={exampleServices[2]} containsImage={false} />}
                        </div>
                        <div className="flex flex-row">
                            {exampleServices[1] && <AboutCard service={exampleServices[1]} containsImage={true} />}
                            {exampleServices[3] && <AboutCard service={exampleServices[3]} containsImage={true} />}</div>
                    </div>
                    <Link href="/services" className="flex flex-row text-purple justify-end px-4 text-xl font-medium">a mnoho dalších</Link>
                </div>

                <ButtonLink path="/services" label="Přehled služeb"></ButtonLink>
            </div>


        </div>
    );
}