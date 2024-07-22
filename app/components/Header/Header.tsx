import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <>
            <div className="flex flex-row justify-between p-10 px-16 content-center">
                <Image src="./logo_main.svg" alt="logo" width={110} height={40}></Image>
                <nav className="font-avenir text-purple text-bold">
                    <Link href="/about" className="px-4">O nás</Link>
                    <Link href="/services" className="px-4">Služby</Link>
                    <Link href="/partners" className="px-4">Partneři</Link>
                    <Link href="/contact" className="px-4">Kontakt</Link>
                    <Link href="/eshop" className="px-4">Eshop</Link>
                </nav>
            </div>
        </>
    );
}