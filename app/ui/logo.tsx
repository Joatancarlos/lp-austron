import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/">
        <Image
          src="/images/logo-nexus-title.svg"
          alt="Logo da empresa Austron"
          width={100}
          height={100}
        />
      </Link>
    </div>
  )
}
