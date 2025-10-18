import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Home from '@/app/page'

describe('Home Page', () => {
  afterEach(() => {
    cleanup()
  })

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

  it('should render heading with correct classes', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-8xl', 'font-bold', 'md:text-9xl')
  })

  it('should render a button inside the heading', () => {
    render(<Home />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
  })

  it('should render button with correct text', () => {
    render(<Home />)

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('B')
  })

  it('should render button with cursor-pointer class', () => {
    render(<Home />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('cursor-pointer')
  })

  it('should have gradient background style applied to heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    const style = window.getComputedStyle(heading)

    expect(style.background).toContain('linear-gradient')
  })

  it('should match snapshot', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
