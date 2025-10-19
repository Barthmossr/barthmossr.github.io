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

  it('should have hidden "arthmossr" text initially', () => {
    render(<AnimatedNameButton />)

    const artText = screen.getByText('arthmossr')
    expect(artText).toBeInTheDocument()
    expect(artText).toHaveClass('max-w-0')
  })

  it('should have cursor-pointer class initially', () => {
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

  it('should have inline-flex and items-baseline classes', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('inline-flex', 'items-baseline')
  })

  it('should expand text when clicked', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    const artText = screen.getByText('arthmossr')

    expect(artText).toHaveClass('max-w-0')
    expect(button).not.toBeDisabled()

    fireEvent.click(button)

    expect(artText).toHaveClass('max-w-[30ch]')
    expect(button).toBeDisabled()
  })

  it('should not collapse when clicked again', () => {
    render(<AnimatedNameButton />)

    const button = screen.getByRole('button')
    const artText = screen.getByText('arthmossr')

    fireEvent.click(button)
    expect(artText).toHaveClass('max-w-[30ch]')
    expect(button).toHaveClass('cursor-default')

    fireEvent.click(button)
    // Should still be expanded
    expect(artText).toHaveClass('max-w-[30ch]')
  })

  it('should apply custom className', () => {
    render(<AnimatedNameButton className='custom-class' />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('should have plain span for B', () => {
    render(<AnimatedNameButton />)

    const bText = screen.getByText('B')
    expect(bText).toBeInTheDocument()
  })

  it('should have transition properties for arthmossr text', () => {
    render(<AnimatedNameButton />)

    const artText = screen.getByText('arthmossr')
    expect(artText).toHaveClass('overflow-hidden', 'whitespace-nowrap')
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
