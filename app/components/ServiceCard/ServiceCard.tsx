import { Service } from "@/app/models/models"
import Image from "next/image"
import { ComponentProps } from "react"

export function ServiceCard({ imagePath, title, description }: Service) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/services_images/${imagePath}`}
        alt={title}
        width={350}
        height={80}
        className="object-fill"
      ></Image>
      <div className="px-6 pb-8 font-avenir">
        <div className="text-lila text-lg font-bold text-center py-3">
          {title}
        </div>
        <div className="text-purple text-center text-xs font-medium">
          {description}
        </div>
      </div>
    </div>
  )
}
