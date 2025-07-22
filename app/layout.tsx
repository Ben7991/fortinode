import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'

import './globals.css'
import 'swiper/css'

import Navbar from '@/components/organisms/navbar/Navbar'
import Footer from '@/components/organisms/footer/Footer'

const openSans = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fortinode Technologies',
  description: 'Reliable IT & Network Support for Growing Businesses',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
