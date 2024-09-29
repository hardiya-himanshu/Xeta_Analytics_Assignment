import React, {useRef, useEffect} from 'react'

function Details({darkMode}) {
  const animatedDiv = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-20');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          } else {
            // Reapply initial hidden classes when the element goes out of view
            entry.target.classList.remove('opacity-100', 'translate-y-0');
            entry.target.classList.add('opacity-0', 'translate-y-20');
          }
        });
      });
  
      if (animatedDiv.current) {
        observer.observe(animatedDiv.current);
      }
  
      return () => {
        if (animatedDiv.current) {
          observer.unobserve(animatedDiv.current);
        }
      };
    }, []);

  return (
    <div id='details' className={`  ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"} `}>
      <div  ref={animatedDiv} className='opacity-0 transform translate-y-20 transition duration-700 ease-in-out px-10 flex sm:gap-10 gap-20 justify-around items-end py-24 flex-wrap'>

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
        <div className='text-2xl sm:translate-x-5 font-bold'>
        Users enroll
        </div>
      </div>
      <div className='flex flex-col justify-center gap-6 text-center items-center'>
        <div className='flex justify-center items-center'>
            <img src="/assets/gifs/detail-3.gif" width="120px" alt="" />
            <p className='text-4xl font-bold'>60+</p>
        </div>
        <div className='text-2xl sm:translate-x-5 font-bold'>
        Workout Sessions
        </div>
      </div>
      </div>
    </div>
  )
}

export default Details
