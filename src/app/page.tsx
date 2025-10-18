import { TextGradient } from '@/components/TextGradient'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen w-screen overflow-hidden scroll-smooth'>
      <TextGradient as='h1' className='text-8xl font-bold md:text-9xl'>
        <button type='button' className='cursor-pointer'>
          B
        </button>
      </TextGradient>
    </div>
  )
}
