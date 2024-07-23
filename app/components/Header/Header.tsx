'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const handleHashLinkClick = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (pathname !== '/') {
            e.preventDefault();
            router.push(`/${hash}`);
        }
    };

    return (
        <>
            <div className="flex flex-row justify-between p-10 px-16 content-center">
                <Link href="/"><Image src="/logo_main.svg" alt="logo" width={110} height={40}></Image></Link>

                <nav className="font-avenir text-purple text-bold">
                    <Link href="/" className="px-4">O nás</Link>
                    <Link href="/services" className="px-4">Služby</Link>
                    <Link href="#partners" onClick={handleHashLinkClick('#partners')} className="px-4">Partneři</Link>
                    <Link href="#contact" onClick={handleHashLinkClick('#contact')} className="px-4">Kontakt</Link>
                    <Link href="/eshop" className="px-4">Eshop</Link>
                </nav>
            </div>
        </>
    );
}