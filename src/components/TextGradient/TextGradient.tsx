import { TextGradientProps } from './TextGradient.types'

function TextGradient({
  children,
  className = '',
  as: Component = 'div',
}: TextGradientProps) {
  return (
    <Component
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
    </Component>
  )
}

export { TextGradient }
