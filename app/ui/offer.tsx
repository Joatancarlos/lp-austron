import Image from 'next/image'
import React from 'react'

interface OfferProps {
  image: string
  title: string
  text: string
}

export default function Offer({ image, title, text }: OfferProps) {
  return (
    <div className="flex flex-col justify-between items-center w-80 h-56">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        // className="bg-[#9B2FE9] rounded"
      />
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-center">{text}</p>
    </div>
  )
}
