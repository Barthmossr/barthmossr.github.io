import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { AnimatedNameButton } from '@/components/AnimatedNameButton'

describe('AnimatedNameButton Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render a button', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should have type button', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('should render initial text "B"', () => {
    render(<AnimatedNameButton />)

    expect(screen.getByText('B')).toBeInTheDocument()
  })

  it('should have hidden "art" text initially', () => {
    render(<AnimatedNameButton />)

    const artText = screen.getByText('art')
    expect(artText).toBeInTheDocument()
    expect(artText).toHaveClass('max-w-0', 'opacity-0')
  })

  it('should have cursor-pointer class', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('cursor-pointer')
  })

  it('should have transition classes', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'transition-transform',
      'duration-300',
      'ease-in-out',
    )
  })

  it('should have hover and active scale classes', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('hover:scale-105', 'active:scale-95')
  })

  it('should have relative positioning', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('relative')
  })

  it('should expand text when clicked', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    const artText = screen.getByText('art')

    expect(artText).toHaveClass('max-w-0', 'opacity-0')

    fireEvent.click(button)

    expect(artText).toHaveClass('max-w-[15ch]', 'opacity-100')
  })

  it('should collapse text when clicked again', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    const artText = screen.getByText('art')

    fireEvent.click(button)
    expect(artText).toHaveClass('max-w-[15ch]', 'opacity-100')

    fireEvent.click(button)
    expect(artText).toHaveClass('max-w-0', 'opacity-0')
  })

  it('should apply custom className', () => {
    render(<AnimatedNameButton className='custom-class' />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('should have inline-block span for B', () => {
    render(<AnimatedNameButton />)

    const bText = screen.getByText('B')
    expect(bText).toHaveClass('inline-block')
  })

  it('should have transition properties for art text', () => {
    render(<AnimatedNameButton />)

    const artText = screen.getByText('art')
    expect(artText).toHaveClass(
      'inline-block',
      'overflow-hidden',
      'transition-all',
      'duration-500',
      'ease-out',
    )
  })

  it('should match snapshot when collapsed', () => {
    const { container } = render(<AnimatedNameButton />)
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot when expanded', () => {
    const { container } = render(<AnimatedNameButton />)
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(container).toMatchSnapshot()
  })
})
