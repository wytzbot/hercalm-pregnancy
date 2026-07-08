import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import CountrySelector from '@/components/CountrySelector'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600'],
  variable: '--font-poppins'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'HerCalm - Pregnancy Guides',
  description: '1000+ funny, relatable pregnancy guides. Medically sourced.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-poppins bg-[#FFF9F5] text-gray-800 antialiased">
        <header className="p-4 bg-white shadow-sm sticky top-0 z-10 flex justify-between items-center">
          <h1 className="font-playfair text-2xl text-pink-600">HerCalm</h1>
          <CountrySelector />
        </header>
        {children}
        <footer className="p-6 text-center text-sm text-gray-500 bg-white mt-10">
          <p>Medical information only. Talk to your healthcare provider.</p>
          <p>© 2026 HerCalm. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
  }
