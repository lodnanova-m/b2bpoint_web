import Image from "next/image";
import Link from "next/link";
import envelope from "@/app/assets/envelope.svg"
import footer from "@/app/assets/footer.svg"
import facebook from "@/app/assets/facebook.svg"
import instagram from "@/app/assets/instagram.svg"
import youtube from "@/app/assets/youtube.svg"
import phone from "@/app/assets/phone.svg"
import linkedin from "@/app/assets/linkedin.svg"
import marker from "@/app/assets/marker.svg"
export function Footer() {
    return (
        <>
            <div className="bg-purple flex flex-col text-white py-14">
                <div className="flex lg:flex-row lg:justify-evenly flex-col p-10">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col lg:pb-4">
                            <div className="font-avenir font-bold text-xl">
                                PROVOZOVATEL
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
                            <div className="font-avenir font-bold text-xl">SKLAD</div>
                            <div className="flex flex-col font-avenir text-regular">
                                <div>TASKA CZ s.r.o</div>
                                <div>Žižkova ulice 185</div>
                                <div>397 01 Písek</div>
                            </div>
                        </div>
                    </div>
                    <div className="font-avenir">
                        <div className="lg:pb-10  font-bold text-xl">KONTAKT</div>
                        <div className="pb-4">
                            <div className="flex flex-row content-center py-2">
                                <Image src={envelope} alt="evelope icon" height={20} width={20}></Image>
                                <div className="pl-3">info@b2bpoint.cz</div>
                            </div>
                            <div className="flex flex-row content-center py-2">
                                <Image src={phone} alt="phone icon" height={20} width={20}></Image>
                                <div className="pl-3">+420 776 506 001</div>
                            </div>
                            <div className="flex flex-row content-center py-2">
                                <Image src={marker} alt="marker icon" height={20} width={20}></Image>
                                <div className="pl-3">Jičínská 226/17, 130 00 Praha 3</div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col lg:pb-4 justify-between">
                        <div>
                            <div className=" font-bold text-xl">NEWSLETTER</div>
                            <div className="pb-4">
                                <div>Exkluzivní tipy a inspirace přímo pro Vás!</div>
                                <div className="py-2 flex flex-row">
                                    <input
                                        type="email"
                                        placeholder="Váš email"
                                        className="bg-white w-full bg-opacity-90 border-transparent rounded-md px-4 py-2 drop-shadow-lg text-lg font-avenir font-light text-purple placeholder-gray-500"
                                    />
                                    <button type="submit" className="bg-green  rounded-md px-2 py-2 mx-2 bg-opacity-70 hover:bg-green hover:bg-opacity-90">
                                        <Image src={envelope} alt="newsletter button" width={40} height={40}></Image>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" font-bold text-xl ">SLEDUJTE NÁS</div>
                            <div className="flex flex-row py-4">
                                <Link href="https://www.instagram.com/b2bpointcz/">
                                    <Image src={instagram} alt="instagram icon" height={50} width={50} className="pr-6"></Image>
                                </Link>
                                <Link href="https://www.facebook.com/b2bpoint">
                                    <Image src={facebook} alt="facebook icon" height={50} width={50} className="pr-6"></Image>
                                </Link>
                                <Link href="https://www.linkedin.com/company/b2bpoint-cz/">
                                    <Image src={linkedin} alt="linkedin icon" height={60} width={55} className="pr-6"></Image>
                                </Link>
                                <Link href="https://www.youtube.com/@B2Bpoint">
                                    <Image src={youtube} alt="youtube icon" height={30} width={30}></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="h-[2px] bg-white w-full rounded-full mx-6 "></div>
                    <Image src={footer} alt="logo svg image icon" width={120} height={100}></Image>
                    <div className="h-[2px] bg-white w-full rounded-full mx-6"></div>
                </div>
            </div >

        </>
    );
}