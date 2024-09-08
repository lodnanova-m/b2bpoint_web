import Image from "next/image";
import Link from "next/link";

export function Partners() {
  return (
    <div id="partners" className="text-center">
      <div className="flex justify-center font-avenir font-light text-xl mt-20 mb-4 text-blue">
        NAŠI PARTNEŘI
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden bg-blue bg-opacity-40 ">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image
              src="/partners/scukcz.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              GAŠPARÍK
            </div>
          </li>
          <li>
            <Image
              src="/partners/enovation.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              Solnobanská a.s.
            </div>
          </li>
          <li>
            <Image
              src="/partners/flowpay.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              CORMEN s.r.o.
            </div>
          </li>
          <li>
            <Image
              src="/partners/partner.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              Msnacks | Chrumky PEX
            </div>
          </li>
          <li>
            <Image
              src="/partners/dejtonaweb.svg"
              alt="partner2 logo"
              height={250}
              width={250}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              BIOMILA
            </div>
          </li>
          <li>
            <Image
              src="/partners/altevta.svg"
              alt="partner2 logo"
              height={250}
              width={150}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              BalíkPlus
            </div>
          </li>
          <li>
            <Image
              src="/partners/free_clinic_1.svg"
              alt="partner2 logo"
              height={250}
              width={150}
            ></Image>
          </li>
          <li>
            <Link href="http://www.patent-k.cz/">
              <div className="text-blue text-2xl font-bold text-nowrap">
                Ing. Václav Kratochvíl,
              </div>
              <div className="text-blue text-2xl font-bold text-nowrap">
                {" "}
                patentový zástupce
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://www.mujmonk.cz/">
              <Image
                src="/partners/monk.svg"
                alt="partner2 logo"
                height={140}
                width={140}
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="services/2">
              <div className="text-blue text-xl font-bold text-nowrap">
                Kopp | Balení sypkých potravín
              </div>
            </Link>
          </li>
          <li>
            <Link href="services/3">
              <Image
                src="/partners/packjack.svg"
                alt="partner2 logo"
                height={140}
                width={170}
              ></Image>
            </Link>
          </li>
          <li>
            <div className="text-blue text-xl font-bold text-nowrap">
              BETINA spol. s.r.o.
            </div>
          </li>
          <li>
            <Link href="https://www.ceskaposta.cz/">
              <Image
                src="/partners/ceska_posta.svg"
                alt="partner2 logo"
                height={250}
                width={250}
              ></Image>
            </Link>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              src="/partners/scukcz.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              GAŠPARÍK
            </div>
          </li>
          <li>
            <Image
              src="/partners/enovation.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              Solnobanská a.s.
            </div>
          </li>
          <li>
            <Image
              src="/partners/flowpay.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              CORMEN s.r.o.
            </div>
          </li>
          <li>
            <Image
              src="/partners/partner.svg"
              alt="partner1 logo"
              height={200}
              width={200}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              Msnacks | Chrumky PEX
            </div>
          </li>
          <li>
            <Image
              src="/partners/dejtonaweb.svg"
              alt="partner2 logo"
              height={250}
              width={250}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              BIOMILA
            </div>
          </li>
          <li>
            <Image
              src="/partners/altevta.svg"
              alt="partner2 logo"
              height={250}
              width={150}
            ></Image>
          </li>
          <li>
            <div className="text-blue text-2xl font-bold text-nowrap">
              BalíkPlus
            </div>
          </li>
          <li>
            <Image
              src="/partners/free_clinic_1.svg"
              alt="partner2 logo"
              height={250}
              width={150}
            ></Image>
          </li>
          <li>
            <Link href="http://www.patent-k.cz/">
              <div className="text-blue text-2xl font-bold text-nowrap">
                Ing. Václav Kratochvíl,
              </div>
              <div className="text-blue text-2xl font-bold text-nowrap">
                {" "}
                patentový zástupce
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://www.mujmonk.cz/">
              <Image
                src="/partners/monk.svg"
                alt="partner2 logo"
                height={140}
                width={140}
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="services/2">
              <div className="text-blue text-xl font-bold text-nowrap">
                Kopp | Balení sypkých potravín
              </div>
            </Link>
          </li>
          <li>
            <Link href="services/3">
              <Image
                src="/partners/packjack.svg"
                alt="partner2 logo"
                height={140}
                width={170}
              ></Image>
            </Link>
          </li>
          <li>
            <div className="text-blue text-xl font-bold text-nowrap">
              BETINA spol. s.r.o.
            </div>
          </li>
          <li>
            <Link href="https://www.ceskaposta.cz/">
              <Image
                src="/partners/ceska_posta.svg"
                alt="partner2 logo"
                height={250}
                width={250}
              ></Image>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
