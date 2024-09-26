import React from 'react'
import FitsnapFooter from '../../utils/FitsnapTheme'

function Footer({darkMode}) {
  return (
    <div className={`flex justify-between items-start px-32 py-28 ${darkMode ? 'bg-customDark text-customWhite' : 'bg-customLight text-customBlack'}`}> 
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
          <img src="/assets/images/facebook.svg"  alt="facebook" className='w-8 h-8' />
          <img src="/assets/images/youtube.svg"  alt="youtube" className='w-8 h-8' />
          <img src="/assets/images/instagram.svg" alt="instagram" className='w-8 h-8' />
          <img src="/assets/images/linkedin.svg" alt="linkedin" className='w-8 h-8' />
        </div>
    </div>
    <div className='flex flex-col justify-between max-w-96 items-start gap-16'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold'>Download the app</h3>      
          <p className='text-xl'>Android - Google Play Store</p>
          <p className='text-xl'>iOS - Apple App Store</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold'>Contact</h3>      
          <p className='text-xl'>Etiam consequat sem ullamcorper, euismodmetus sit </p>
          <p className='text-xl'>+91 0000000000</p>
        </div>
    </div>
    <div className='flex flex-col gap-10 max-w-96 items-start'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold'>Company</h3>      
          <p className='text-xl'>About us</p>
          <p className='text-xl'>Terms & Conditions</p>
          <p className='text-xl'>Privacy Policy</p>
          <p className='text-xl'>Community Guidelines</p>
        </div>
    </div>
    </div>
  )
}

export default FitsnapFooter(Footer)
