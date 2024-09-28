import React from 'react'
import FitsnapTheme from '../../utils/FitsnapTheme'

function Footer({darkMode}) {
  return (
    <div className={`flex md:gap-10 gap-16 border-red-500 flex-wrap justify-between items-start md:px-32 sm:px-16 px-3 sm:py-28 py-16 ${darkMode ? 'bg-customDark text-customWhite' : 'bg-customLight text-customBlack'}`}> 
    <div className='flex flex-col gap-6  max-w-[500px] items-start'>

        <div>
          <img src={darkMode?"/assets/images/fitsnap-logo.png":"/assets/images/fitsnap-logo-dark.png"} alt="fitsnap-logo" className='w-30 h-20 -translate-x-4' />
        </div>
        <div className='text-5xl font-bold'>
          Get FitSnap
        </div>
        <div>
        Be the first to test the first AI personal trainer, ever! Keep up to
date with the launch, new workouts and further details by joining
our mailing list.
        </div>
        <div className='flex justify-center items-center gap-10 z-10'>
          <img src={!darkMode?"/assets/images/facebook.svg":"/assets/images/facebook-dark.svg"}  alt="facebook" className='w-8 h-8 cursor-pointer' />
          <img src={!darkMode?"/assets/images/youtube.svg":"/assets/images/youtube-dark.svg"} alt="youtube" className='w-8 h-8 cursor-pointer' />
          <img src={!darkMode?"/assets/images/instagram.svg":"/assets/images/instagram-dark.svg"} alt="instagram" className='w-8 h-8 cursor-pointer' />
          <img src={!darkMode?"/assets/images/linkedin.svg":"/assets/images/linkedin-dark.svg"} alt="linkedin" className='w-8 h-8 cursor-pointer' />
        </div>
    </div>
    <div className='flex flex-col justify-between max-w-96 items-start gap-16'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold '>Download the app</h3>      
          <p className='text-xl cursor-pointer'>Android - Google Play Store</p>
          <p className='text-xl cursor-pointer'>iOS - Apple App Store</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold'>Contact</h3>      
          <p className='text-xl'>Etiam consequat sem ullamcorper, euismodmetus sit </p>
          <p className='text-xl'>+91 9876543210</p>
        </div>
    </div>
    <div className='flex flex-col gap-10 max-w-96 items-start'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold'>Company</h3>      
          <p className='text-xl cursor-pointer'>About us</p>
          <p className='text-xl cursor-pointer'>Terms & Conditions</p>
          <p className='text-xl cursor-pointer'>Privacy Policy</p>
          <p className='text-xl cursor-pointer'>Community Guidelines</p>
        </div>
    </div>
    </div>
  )
}

export default FitsnapTheme(Footer)
