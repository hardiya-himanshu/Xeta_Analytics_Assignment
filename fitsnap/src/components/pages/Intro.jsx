import React from 'react'

function Intro() {
  return (
    <div className='relative border-none '>
        {/* BG-VIDEO */}
        <div className='overflow-hidden'>
            <video className='bg-cover bg-center' loop autoPlay >
                <source src="/assets/videos/intro.mp4" type="video/mp4"/>
            </video>
            {/* BOTTOM_WAVE_DIV */}
            
        </div>
        <div className="bottom-0 absolute translate-y-1 z-40 border-none">
            <img src="/assets/images/wave-div.png" className='bg-no-repeat bg-cover w-screen bottom-0' alt="" />
        </div>
    </div>
  )
}

export default Intro
