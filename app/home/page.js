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
  { name: 'Food', slug: 'food-guide-1' },
  { name: 'Posture', slug: 'food-guide-1' },
  { name: 'Activities', slug: 'food-guide-1' },
  { name: 'Symptoms', slug: 'food-guide-1' },
  { name: 'Mental Health', slug: 'food-guide-1' },
  { name: 'Labor Prep', slug: 'food-guide-1' },
]

export default function Home() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)])
  }, [])

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h2 className="font-playfair text-4xl mb-2">{greeting}</h2>
      <p className="mb-8 text-gray-600">1000+ guides on food, posture, activities & more. All medically sourced.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map(cat => (
          <Link key={cat.name} href={`/guide/${cat.slug}`} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition border border-pink-100">
            <h3 className="font-semibold text-lg">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  )
    }
