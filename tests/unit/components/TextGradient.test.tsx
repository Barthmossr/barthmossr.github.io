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
})
