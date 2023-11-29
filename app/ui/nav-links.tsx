"use client";

import Link from 'next/link'
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react'
import Logo from './logo';
import { Button } from './button';

const navigation = [
  { name: 'Início', href: '#' },
  { name: 'Sobre', href: '#' },
  { name: 'Business', href: '#' },
  { name: 'Contato', href: '#' },
]

export default function NavLinks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Logo />
        {/* Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Mobile */}
        {/* Desktop */}
        <ul className="hidden lg:flex lg:gap-x-12">
          {navigation.map(({ name, href}) => (
            <li key={name}>
              <Link
                href={href}
                className="hover:font-semibold hover:text-white"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="font-semibold hover:bg-[#f51357] hover:shadow-xl px-4 py-2 rounded-full transition-all duration-200">
              Registre-se
            </Button>
            <Button className="font-semibold bg-white px-4 py-2 rounded-full transition-all shadow-xl">
              Entrar
            </Button>
          </div>
        {/* Desktop */}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Falta o map dos links */}
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
