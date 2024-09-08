import { Actuality } from "@/app/models/models"
import Image from "next/image"
import Link from "next/link"

type ActualityProps = {
  actuality: Actuality
}

export function ActualityCard({ actuality }: ActualityProps) {
  return (
    <div
      className="font-avenir relative flex flex-row items-center justify-end h-64 w-full text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(70, 56, 99, 0) 20%, rgba(70, 56, 99, 1) 70%), url(${actuality.imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative bg-black bg-opacity-50 p-4 rounded m-4 text-end flex flex-col items-end">
        <div className="text-lg font-light">{actuality.label}</div>
        <div className="text-4xl py-3 font-bold">{actuality.title}</div>
        <div className="flex flex-row justify-end items-center">
          <Image
            src="./about-marker.svg"
            alt="marker icon"
            height={20}
            width={20}
          ></Image>
          <div className="text-2xl px-2">{actuality.place}</div>
          <div className="text-2xl pl-4">{actuality.date}</div>
        </div>
        <button className="my-4 text-purple bg-white rounded-md py-2 px-4 font-medium flex flex-row items-center">
          <Link href="/pdf/kontrakcni_den.pdf" className="pr-2" target="_blank">
            Více zde
          </Link>{" "}
          <Image
            src="./Vector.svg"
            alt="link icon"
            width={8}
            height={8}
          ></Image>
        </button>
      </div>
    </div>
  )
}
