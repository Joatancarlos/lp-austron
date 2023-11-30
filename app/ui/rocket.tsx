"use client";

import Image from 'next/image';
import React from 'react'

export default function Rocket() {
  return (
    <div className="absolute right-[-90px] top-[-20px] md:static opacity-40 md:opacity-100">
      <Image
          src="/images/foguete.png"
          alt="Ilustração de um foguete decolando"
          width={300}
          height={350}
          className="animate-none md:animate-[rocket_1s_ease-in-out_infinite_alternate]"
          />
    </div>
  )
}
