import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','600'], variable: '--font-poppins' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'HerCalm - Pregnancy Guides You Can Trust',
  description: '1000+ funny, relatable pregnancy guides. Reviewed by medical sources.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="bg-[#FFF9F5] text-gray-800">
        <header className="p-4 bg-white shadow-sm">
          <h1 className="font-playfair text-2xl text-pink-600">HerCalm</h1>
        </header>
        {children}
        <footer className="p-6 text-center text-sm text-gray-500">
          Medical info only. Talk to your doctor. © 2026 HerCalm
        </footer>
      </body>
    </html>
  )
}
