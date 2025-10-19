'use client'

import { useState } from 'react'
import { AnimatedNameButtonProps } from './AnimatedNameButton.types'

function AnimatedNameButton({ className = '' }: AnimatedNameButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true)
    }
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      disabled={isExpanded}
      className={`inline-flex items-baseline transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${
        isExpanded ? 'cursor-default' : 'cursor-pointer'
      } ${className}`}
      style={{
        background:
          'linear-gradient(to right, rgb(80, 150, 220), rgb(255, 200, 120))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      <span>B</span>
      <span
        className={`overflow-hidden whitespace-nowrap ${
          isExpanded ? 'max-w-[30ch]' : 'max-w-0'
        }`}
        style={{
          transition: 'max-width 1600ms ease-in-out',
        }}
        aria-hidden={!isExpanded}
      >
        arthmossr
      </span>
    </button>
  )
}

export { AnimatedNameButton }
