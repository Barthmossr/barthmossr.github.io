import { TextGradient } from '@/components/TextGradient'
import { AnimatedNameButton } from '@/components/AnimatedNameButton'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen w-screen overflow-hidden scroll-smooth'>
      <TextGradient as='h1' className='text-8xl font-bold md:text-9xl'>
        <AnimatedNameButton />
      </TextGradient>
    </div>
  )
}
