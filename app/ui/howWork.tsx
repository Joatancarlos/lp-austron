import Image from 'next/image';
import React from 'react'

interface Props {
  image: string
  title: string
  text: string
  widthImg: number
  heightImg: number
  colorTitle?: string
}

export default function HowWork({
    image,
    title,
    text,
    colorTitle,
    widthImg,
    heightImg
  }: Props) {
  return (
    <div className=" flex flex-col justify-center items-center w-72 relative">
      <div className='flex items-center h-56 '>
        <Image
          src={image}
          alt={title}
          width={widthImg}
          height={heightImg}
          className="howWorkShadow"
        />
      </div>
      <h3 className={`font-semibold my-5 text-2xl tracking-tighter ${colorTitle}`}>{title}</h3>
      <p className="text-center text-sm">{text}</p>
    </div>
  )
}
