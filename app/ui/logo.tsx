import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <Image
        src="/images/logo-nexus-title.svg"
        alt="Logo da empresa Austron"
        width={100}
        height={100}
      />
    </div>
  )
}
