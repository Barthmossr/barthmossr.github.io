import { TextGradientProps } from './TextGradient.types'

function TextGradient({ children, className = '' }: TextGradientProps) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{
        background:
          'linear-gradient(to right, rgb(80, 150, 220), rgb(255, 200, 120))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </div>
  )
}

export { TextGradient }
