'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Splash() {
  const [goHome, setGoHome] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setGoHome(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if(goHome) router.push('/home')
  }, [goHome, router])

  return (
    <main className="h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#FFE8E0] to-[#FFF9F5]">
      <div className="animate-bounce-slow mb-8">
        <svg width="220" height="320" viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="60" r="30" fill="#FDBA74"/>
          <path d="M80 50 C80 20, 140 20, 140 50" fill="#4A5568"/>
          <ellipse cx="110" cy="160" rx="50" ry="70" fill="#FECACA"/>
          <ellipse cx="60" cy="150" rx="12" ry="40" fill="#FDBA74" transform="rotate(-20 60 150)"/>
          <ellipse cx="160" cy="150" rx="12" ry="40" fill="#FDBA74" transform="rotate(20 160 150)"/>
          <ellipse cx="90" cy="250" rx="15" ry="50" fill="#FDBA74"/>
          <ellipse cx="130" cy="250" rx="15" ry="50" fill="#FDBA74"/>
          <path d="M70 130 Q110 200 150 130 L140 270 Q110 280 80 270 Z" fill="#F472B6"/>
        </svg>
      </div>
      <h1 className="font-playfair text-4xl text-pink-600 mb-2">HerCalm</h1>
      <p className="text-gray-600 mb-10">Your Pregnancy Guide & Companion</p>
      <button onClick={() => setGoHome(true)} className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition active:scale-95">
        Skip →
      </button>
      <p className="text-xs text-gray-400 mt-6">Loading your guides...</p>
    </main>
  )
                           }
