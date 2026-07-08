'use client'
import { useState, useEffect } from 'react'

const countries = [
  { code: 'ng', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  { code: 'in', name: 'India', flag: '🇮🇳' },
  { code: 'default', name: 'Other', flag: '🌍' },
]

export default function CountrySelector() {
  const [country, setCountry] = useState('default')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('hercalm_country')
    if(!saved) setShowModal(true)
    else setCountry(saved)
  }, [])

  const selectCountry = (code) => {
    localStorage.setItem('hercalm_country', code)
    setCountry(code)
    setShowModal(false)
    window.location.reload()
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="text-sm bg-pink-100 px-3 py-1 rounded-full">
        {countries.find(c => c.code === country)?.flag} {countries.find(c => c.code === country)?.name}
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full">
            <h2 className="font-playfair text-2xl mb-4">Where are you? 🤰</h2>
            <p className="text-sm text-gray-600 mb-4">We’ll show you food and advice available in your country.</p>
            <div className="grid grid-cols-2 gap-3">
              {countries.map(c => (
                <button key={c.code} onClick={() => selectCountry(c.code)} className="p-3 border rounded-lg hover:bg-pink-50 text-left">
                  {c.flag} {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
                         }
