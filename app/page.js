'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Splash() {
  const [showHome, setShowHome] = useState(false)
  const router = useRouter()

  // Auto skip to homepage after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHome(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if(showHome) router.push('/home')
  }, [showHome, router])

  return (
    <div className="h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#FFE8E0] to-[#FFF9F5]">
      
      {/* Animated Pregnant Woman SVG */}
      <div className="animate-bounce-slow mb-8">
        <svg width="220" height="320" viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <circle cx="110" cy="60" r="30" fill="#FDBA74"/>
          {/* Hair */}
          <path d="M80 50 C80 20, 140 20, 140 50" fill="#4A5568"/>
          {/* Body - Pregnant Belly */}
          <ellipse cx="110" cy="160" rx="50" ry="70" fill="#FECACA"/>
          {/* Arms */}
          <ellipse cx="60" cy="150" rx="12" ry="40" fill="#FDBA74" transform="rotate(-20 60 150)"/>
          <ellipse cx="160" cy="150" rx="12" ry="40" fill="#FDBA74" transform="rotate(20 160 150)"/>
          {/* Legs */}
          <ellipse cx="90" cy="250" rx="15" ry="50" fill="#FDBA74"/>
          <ellipse cx="130" cy="250" rx="15" ry="50" fill="#FDBA74"/>
          {/* Dress */}
          <path d="M70 130 Q110 200 150 130 L140 270 Q110 280 80 270 Z" fill="#F472B6"/>
        </svg>
      </div>

      <h1 className="font-playfair text-3xl text-pink-600 mb-2">HerCalm</h1>
      <p className="text-gray-600 mb-10">Your Pregnancy Guide & Companion</p>

      {/* Skip Button */}
      <button 
        onClick={() => setShowHome(true)}
        className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition">
        Skip →
      </button>

      <p className="text-xs text-gray-400 mt-6">Loading your guides...</p>
    </div>
  )
    }
