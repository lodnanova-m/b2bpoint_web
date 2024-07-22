import Image from "next/image";

export function Footer() {
    return (
        <>
            <div className="bg-purple flex flex-col text-white py-14">
                <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col pb-4">
                            <div className="font-avenir text-bold ">
                                Provozovatel
                            </div>
                            <div className="flex flex-col font-avenir text-regular">
                                <div>TASKA CZ s.r.o.</div>
                                <div>IČ 06288910</div>
                                <div>DIČ CZ06288910</div>
                                <div>C 279198vedenmá u</div>
                                <div>Městského soudu v Praze</div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4">
                            <div className="font-avenir text-bold">Sklad</div>
                            <div className="flex flex-col font-avenir text-regular">
                                <div>TASKA CZ s.r.o</div>
                                <div>Žižkova ulice 185</div>
                                <div>397 01 Písek</div>
                            </div>
                        </div>
                    </div>
                    <div className="font-avenir text-regular">
                        <div className="pb-10">KONTAKT</div>
                        <div>
                            <div className="flex flex-row content-center py-2">
                                <Image src="./envelope.svg" alt="evelope icon" height={20} width={20}></Image>
                                <div className="pl-3">info@b2bpoint.cz</div>
                            </div>
                            <div className="flex flex-row content-center py-2">
                                <Image src="./phone.svg" alt="phone icon" height={20} width={20}></Image>
                                <div className="pl-3">+420 776 506 001</div>
                            </div>
                            <div className="flex flex-row content-center py-2">
                                <Image src="./marker.svg" alt="marker icon" height={20} width={20}></Image>
                                <div className="pl-3">Jičínská 226/17, 130 00 Praha 3</div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="pb-4">NEWSLETTER</div>
                            <div>
                                <div>Exkluzivní tipy a inspirace přímo pro Vás!</div>
                                <div>form</div>
                            </div>
                        </div>
                        <div>
                            <div>SLEDUJTE NÁS</div>
                            <div className="flex flex-row py-4">
                                <Image src="./instagram.svg" alt="instagram icon" height={50} width={50} className="pr-6"></Image>
                                <Image src="./facebook.svg" alt="facebook icon" height={50} width={50} className="pr-6"></Image>
                                <Image src="./linkedin.svg" alt="linkedin icon" height={50} width={50} className="pr-6"></Image>
                                <Image src="./youtube.svg" alt="youtube icon" height={30} width={30}></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="h-[2px] bg-white w-full rounded-full mx-6 "></div>
                    <Image src="footer.svg" alt="logo svg image icon" width={120} height={100}></Image>
                    <div className="h-[2px] bg-white w-full rounded-full mx-6"></div>
                </div>
            </div >

        </>
    );
}