import React from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'

function ThingsYouNeed({darkMode}) {
  return (
    <div className={`py-10 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
        <h1 className='text-6xl font-semibold text-center mt-28 mb-16 mx-auto'>THINGS YOU NEED</h1>
        <div className='relative h-[1000px] w-full'>
            <img src={'../assets/images/things-bg.jpeg'} alt="Things You Need" className='h-full w-full object-cover' />
            <div className='absolute bg-customWhite/40 h-full w-full z-10 top-0 left-0'></div>
            <img src="../assets/images/things-1.png" alt="Headphones" className='absolute top-36 left-1/4 transform -translate-x-44 -translate-y-1/2 w-96 z-20' />
            <img src="../assets/images/things-2.png" alt="A Tab With FitSnap" className='absolute top-3/4 left-1/4 transform translate-x-[440px] -translate-y-20 w-96 z-20' />
            <img src="../assets/images/things-3.png" alt="Fitness Band" className='absolute top-96 left-1/4 transform -translate-x-56 translate-y-[560px] w-96 z-20' />
        </div>
    </div>
  )
}

export default FitSnapTheme(ThingsYouNeed)
