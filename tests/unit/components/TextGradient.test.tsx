import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { TextGradient } from '@/components/TextGradient'

describe('TextGradient Component', () => {
  it('should render with default tag (div)', () => {
    const { container } = render(<TextGradient>Test Content</TextGradient>)
    const element = container.firstChild

    expect(element?.nodeName).toBe('DIV')
  })

  it('should render with custom tag', () => {
    render(<TextGradient as='h1'>Heading</TextGradient>)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Heading')
  })

  it('should render children correctly', () => {
    render(<TextGradient>Test Text</TextGradient>)

    expect(screen.getByText('Test Text')).toBeInTheDocument()
  })

  it('should apply default inline-block class', () => {
    const { container } = render(<TextGradient>Content</TextGradient>)
    const element = container.firstChild as HTMLElement

    expect(element).toHaveClass('inline-block')
  })

  it('should merge custom className with default class', () => {
    const { container } = render(
      <TextGradient className='custom-class'>Content</TextGradient>,
    )
    const element = container.firstChild as HTMLElement

    expect(element).toHaveClass('inline-block', 'custom-class')
  })
})
