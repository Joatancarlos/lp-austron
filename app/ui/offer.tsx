import Image from 'next/image'
import React from 'react'

interface OfferProps {
  image: string
  title: string
  text: string
  widthImg: number
  heightImg: number
  colorTitle?: string
}

export default function Offer({
    image,
    title,
    text,
    colorTitle,
    widthImg,
    heightImg
  }: OfferProps) {
  return (
    <div className=" flex flex-col justify-center items-center w-72">
      <Image
        src={image}
        alt={title}
        width={widthImg}
        height={heightImg}
        // className="bg-[#9B2FE9] rounded"
      />
      <h3 className={`font-semibold my-5 text-2xl ${colorTitle}`}>{title}</h3>
      <p className="text-center">{text}</p>
    </div>
  )
}
