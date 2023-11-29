import type { Metadata } from 'next'
import './globals.css'
import { openSans } from './ui/fonts'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Austron',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
        <footer className="text-center p-2">
          Copyrigth &#169; 2023 <Link className="font-bold" href="/">Austron</Link>
        </footer>
      </body>
    </html>
  )
}
