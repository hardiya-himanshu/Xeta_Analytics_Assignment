import React from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'

function Details({darkMode}) {
  return (
    <div id='details' className={`flex justify-around items-end py-24 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"} flex-wrap`}>
      <div className='flex flex-col justify-center gap-6 text-center items-center'>
        <div className='flex justify-center items-center'>
            <img src="/assets/gifs/detail-1.gif" width="120px" alt="" />
            <p className='text-4xl font-bold'>50+</p>
        </div>
        <div className='text-2xl font-bold'>
        GYM Enrolled
        </div>
      </div>
      <div className='flex flex-col justify-center gap-6 text-center items-center'>
        <div className='flex justify-center items-center'>
            <img src="/assets/gifs/detail-2.gif" width="120px" alt="" />
            <p className='text-4xl font-bold'>250+</p>
        </div>
        <div className='text-2xl translate-x-5 font-bold'>
        Users enroll
        </div>
      </div>
      <div className='flex flex-col justify-center gap-6 text-center items-center'>
        <div className='flex justify-center items-center'>
            <img src="/assets/gifs/detail-3.gif" width="120px" alt="" />
            <p className='text-4xl font-bold'>60+</p>
        </div>
        <div className='text-2xl translate-x-5 font-bold'>
        Workout Sessions
        </div>
      </div>
    </div>
  )
}

export default FitSnapTheme(Details)
