'use client'
import { useState, useEffect } from 'react'

export function useLocalized(data) {
  const [country, setCountry] = useState('default')

  useEffect(() => {
    setCountry(localStorage.getItem('hercalm_country') || 'default')
  }, [])

  if(typeof data === 'string') return data
  return data[country] || data['default']
}
