'use client'
import { useState } from 'react'

export default function AudioPlayer({ text }) {
  const [speaking, setSpeaking] = useState(false)

  const speak = () => {
    if (typeof window === 'undefined') return
    speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
    setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
  }

  return (
    <button onClick={speak} className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition mb-4">
      {speaking? '🔊 Playing...' : '🔊 Listen to this guide'}
    </button>
  )
    }
