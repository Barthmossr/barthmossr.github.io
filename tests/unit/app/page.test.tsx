import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Home from '@/app/page'

describe('Home Page', () => {
  it('should render the main container with correct classes', () => {
    const { container } = render(<Home />)
    const mainDiv = container.firstChild

    expect(mainDiv).toHaveClass('flex', 'justify-center', 'items-center')
    expect(mainDiv).toHaveClass('h-screen', 'w-screen')
    expect(mainDiv).toHaveClass('overflow-hidden', 'scroll-smooth')
  })
})
