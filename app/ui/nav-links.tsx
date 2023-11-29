import Link from 'next/link'
import React from 'react'

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex w-80 justify-between">
        <li>
          <Link
            href="/">Início</Link>
        </li>
        <li>
          <Link
            href="/">Sobre</Link>
        </li>
        <li>
          <Link
            href="/">Business</Link>
        </li>
        <li>
          <Link
            href="/">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}
