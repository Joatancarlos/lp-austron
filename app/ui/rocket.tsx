"use client";

import Image from 'next/image';
import React from 'react'

export default function Rocket() {
  return (
    <div className="hidden md:block">
      <Image
          src="/images/foguete.png"
          alt="Ilustração de um foguete decolando"
          width={300}
          height={350}
          className="animationRocket"
          />
    </div>
  )
}
