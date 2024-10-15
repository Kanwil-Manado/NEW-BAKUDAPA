
import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import ButtonHover from './ui/buttonHover'

const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <BackgroundGradientAnimation containerClassName='absolute inset-0' />
      <div className='relative z-10 flex flex-col items-center justify-center h-full px-4'>
        <h1 className='text-6xl font-bold text-white text-center mb-6'>
          Welcome to BakuDapa
        </h1>
        <p className='text-xl text-white text-center max-w-2xl'>
        Penyaluran TKD di Sulawesi Utara
        </p>
        <div className='p-8'>
          <ButtonHover />
        </div>      
      </div>
    </div>
  )
}

export default Hero
