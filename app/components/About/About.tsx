import { ButtonLink } from "../buttons/ButtonLink";

export function About() {
    return (
        <div id="about" className="flex flex-col px-40">
            <div className="flex flex-col justify-center">
                <div className="text-center text-purple font-avenir text-6xl font-semibold px-20">Váš partner pro úsporu nákladů a efektivní obchodování</div>
                <div className="text-center text-purple font-avenir text-2xl font-light py-10">Zjednodušte procesy, získejte nejlepší nabídky a prodávejte snadněji s B2Bpoint</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <ButtonLink path="/services" label="Přehled služeb"></ButtonLink>
            </div>
            <div></div>

        </div>
    );
}