import Image from "next/image";
import Link from "next/link";

export function Partners() {
    return (
        <>
            <div className="flex justify-center font-avenir font-light text-xl mt-20 mb-4 text-blue">NAŠI PARTNEŘI</div>
            <div id="partners" className="flex flex-row justify-between  bg-blue bg-opacity-30 px-20 py-10">
                <Link href=""> <Image src="./partners/angle-small-left.svg" alt="left angle icon" width={80} height={80}></Image></Link>
                <div className="flex flex-row gap-7 items-center justify-center content-center">
                    <Link href="https://www.scuk.cz/">
                        <Image src="./partners/scukcz.svg" alt="partner1 logo" height={200} width={200}></Image>
                    </Link>
                    <Link href="https://ceskaposta.cz">
                        <Image src="./partners/ceska_posta.svg" alt="partner2 logo" height={250} width={250}></Image>
                    </Link>
                </div>
                <Link href=""><Image src="./partners/angle-small-right.svg" alt="right angle icon" width={80} height={80}></Image></Link>
            </div>
        </>
    );
}