import { MouseEventHandler } from "react"
import Link from "next/link"
import Image from "next/image"

interface NavBarLinksProps {
  handleHashLinkClick: (hash: string) => MouseEventHandler<HTMLAnchorElement>
  menuOpen: boolean
  closeMenu: () => void
}

const NavBarLinks: React.FC<NavBarLinksProps> = ({
  handleHashLinkClick,
  menuOpen,
  closeMenu,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 transform ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-row justify-end p-3">
        <button onClick={closeMenu} className="focus:outline-none mb-4">
          <Image
            src="/close.svg"
            alt="close button"
            height={40}
            width={40}
          ></Image>
        </button>
      </div>
      <nav className="font-avenir text-purple font-bold text-2xl flex flex-col justify-center items-center content-center px-20">
        <Link href="/" className="px-4 py-4" onClick={closeMenu}>
          O nás
        </Link>
        <Link href="/services" className="px-4 py-4" onClick={closeMenu}>
          Služby
        </Link>
        <Link
          href="#partners"
          onClick={(e) => {
            handleHashLinkClick("#partners")(e)
            closeMenu()
          }}
          className="px-4 py-4"
        >
          Partneři
        </Link>
        <Link
          href="#contact"
          onClick={(e) => {
            handleHashLinkClick("#contact")(e)
            closeMenu()
          }}
          className="px-4 py-4"
        >
          Kontakt
        </Link>
        <Link
          href="https://eshop.b2bpoint.cz"
          className="px-4 py-2"
          onClick={closeMenu}
        >
          Eshop
        </Link>
      </nav>
    </div>
  )
}

export default NavBarLinks
