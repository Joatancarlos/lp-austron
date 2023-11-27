import type { Metadata } from 'next'
import './globals.css'
import { openSans } from './ui/fonts'


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
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
