'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const greetings = [
  "Good morning Mama! ☀️",
  "Hey beautiful, how's baby today? 💕",
  "Rise and glow, pregnancy queen 👑",
  "You got this, week by week 🌸"
]

const categories = [
  { name: 'Food', slug: 'food-guide-1', icon: '🍎', desc: 'What to eat by country' },
  { name: 'Posture', slug: 'food-guide-1', icon: '🧘', desc: 'Safe stretches & sleep' },
  { name: 'Activities', slug: 'food-guide-1', icon: '🏃', desc: 'Exercise, travel, sex' },
  { name: 'Symptoms', slug: 'food-guide-1', icon: '🤢', desc: 'Morning sickness & more' },
  { name: 'Mental Health', slug: 'food-guide-1', icon: '🧠', desc: 'Anxiety, mood swings' },
  { name: 'Labor Prep', slug: 'food-guide-1', icon: '🏥', desc: 'Hospital bag checklist' },
]

export default function Home() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)])
  }, [])

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Hero */}
      <div className="text-center mb-10">
        <h2 className="font-playfair text-4xl md:text-5xl mb-3">{greeting}</h2>
        <p className="text-gray-600 mb-4">1000+ guides adapted for your country. No generic advice.</p>
        
        {/* Trust Bar */}
        <div className="flex justify-center gap-4 text-xs text-gray-500">
          <span>✅ Medically Reviewed</span>
          <span>✅ Country Specific</span>
          <span>✅ Ad-Free Reading</span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map(cat => (
          <Link key={cat.name} href={`/guide/${cat.slug}`} 
            className="p-6 bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition border-pink-100">
            <div className="text-3xl mb-2">{cat.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
            <p className="text-sm text-gray-500">{cat.desc}</p>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 p-6 bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl text-center">
        <h3 className="font-playfair text-2xl mb-2">New here?</h3>
        <p className="mb-4">Start with guides for your trimester</p>
        <button className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold">Find My Trimester →</button>
      </div>
    </main>
  )
   }
