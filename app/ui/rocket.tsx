"use client";

import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";

export default function Rocket() {
  return (
    <motion.div>
      <Image
          src="/images/foguete.png"
          alt="Ilustração de um foguete decolando"
          width={300}
          height={350}
          className="animationRocket"
          />
    </motion.div>
  )
}
