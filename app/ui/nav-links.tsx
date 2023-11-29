import Link from 'next/link'
import React from 'react'

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex w-80 justify-between">
        <li>
          <Link
            href="/"
            className="hover:font-semibold hover:text-white"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:font-semibold hover:text-white"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:font-semibold hover:text-white"
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:font-semibold hover:text-white"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}
