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

  it('should render an h1 heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('should render heading with correct text content', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('B')
  })
})
