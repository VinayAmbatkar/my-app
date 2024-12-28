'use client'

import { useEffect, useState } from 'react'

const titles = [
  'Web Developer',
  'Frontend Developer',
  'Gen-AI Developer',
  'Software Developer'
]

export function DynamicTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsVisible(true)
      }, 500) // Wait for fade out animation
    }, 3000) // Change every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <p 
      className={`text-xl text-muted-foreground transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {titles[currentIndex]}
    </p>
  )
}

