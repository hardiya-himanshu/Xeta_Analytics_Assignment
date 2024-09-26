import React, {useRef, useEffect} from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'

function Intro({darkMode}) {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className={`relative border-none ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
        {/* BG-VIDEO */}
        <div className='overflow-hidden'>
            <video className='bg-cover bg-center object-cover' ref={videoRef} loop playsInline muted>
                <source src="/assets/videos/intro.mp4" type="video/mp4"/>
            </video>
        <div className="absolute inset-0 bg-black/50 h-full"></div>
        </div>
        {/* BOTTOM_WAVE_DIV */}
        <div className="bottom-0 absolute translate-y-1 z-40 border-none">
            <img src={`${darkMode?"/assets/images/wave-div-dark.png":"/assets/images/wave-div.png"}`} className='bg-no-repeat bg-cover w-screen bottom-0' alt="" />
        </div>
        <div className='absolute top-0 z-50 w-full h-full'>
            <div className='flex flex-col justify-center items-center gap-10 h-full max-w-4xl mx-auto text-center'>
                <h1 className='text-white text-6xl font-bold italic'>Fitsnap for GYM</h1>
                <p className='text-white text-2xl'>Welcome to the next generation of fitness! At FitSnap, we are thrilled  to introduce the power of Artificial Intelligence (AI) to revolutionize your gym experience.</p>
            </div>
        </div>
    </div>
  )
}

export default FitSnapTheme(Intro)
