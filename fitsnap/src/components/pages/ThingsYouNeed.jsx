import React from 'react'
import FitsnapTheme from '../../utils/FitsnapTheme'

function ThingsYouNeed({darkMode}) {
  return (
    <div id='things' className={`max-h-full py-10 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
        <h1 className='sm:text-6xl text-5xl font-semibold text-center mt-28 mb-16 mx-auto'>THINGS YOU NEED</h1>
        <div className='scrollbar-hide overflow-x-scroll relative h-full w-full min-h-[400px] overflow-x-scroll sm:p-0 p-2 sm:border-0 border-2 ${darkMode?"border-customWhite":"border-gray-800"}'>
            <img src={'../assets/images/things-bg.png'} alt="Things You Need" className={`max-h-full min-h-[400px] min-w-[600px]  w-full bg-center bg-cover object-cover`} />
            {/* <div className='absolute bg-customWhite/40 h-full w-full z-10 top-0 left-0'></div> */}
            {/* <img src="../assets/images/things-1.png" alt="Headphones" className='absolute top-36 left-1/4 transform -translate-x-[220px] -translate-y-[60px] w-96 z-20' />
            <img src="../assets/images/things-2.png" alt="A Tab With FitSnap" className='absolute top-3/4 left-1/4 transform translate-x-[280px] -translate-y-20 w-96 z-20' />
            <img src="../assets/images/things-3.png" alt="Fitness Band" className='absolute top-96 left-1/4 transform -translate-x-[250px] translate-y-[350px] w-96 z-20' /> */}
        </div>
    </div>
  )
}

export default FitsnapTheme(ThingsYouNeed)
