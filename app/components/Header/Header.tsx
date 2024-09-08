"use client"

import { useState, MouseEvent } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import NavBarLinks from "../NavbarLinks/NavBarLinks"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleHashLinkClick =
    (hash: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== "/") {
        e.preventDefault()
        router.push(`/${hash}`)
      }
    }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="">
      <div className="flex flex-row justify-between p-6 md:p-10 md:px-16 content-center pl-10">
        <Link href="/">
          <Image src="/logo_main.svg" alt="logo" width={110} height={40} />
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Image
              src="/menu-burger.svg"
              alt="burger menu button"
              height={50}
              width={50}
            ></Image>
          </button>
        </div>

        <nav className="hidden md:flex font-avenir text-purple font-medium">
          <Link href="/" className="px-4">
            O nás
          </Link>
          <Link href="/services" className="px-4">
            Služby
          </Link>
          <Link
            href="#partners"
            onClick={handleHashLinkClick("#partners")}
            className="px-4"
          >
            Partneři
          </Link>
          <Link
            href="#contact"
            onClick={handleHashLinkClick("#contact")}
            className="px-4"
          >
            Kontakt
          </Link>
          <Link href="https://eshop.b2bpoint.cz" className="px-4">
            Eshop
          </Link>
        </nav>
      </div>

      <NavBarLinks
        handleHashLinkClick={handleHashLinkClick}
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />
    </div>
  )
}
