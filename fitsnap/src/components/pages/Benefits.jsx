import React, {useRef, useEffect} from 'react'
import FitsnapTheme from '../../utils/FitsnapTheme.jsx'

function Benefits({darkMode}) {
    const benefits = [
        {
            name: '24*7 AI Trainer'
        },
        {
            name: 'Unlimited Access'
        },
        {
            name: '150+ Exercise'
        },
        {
            name: 'Customized Plans'
        },
        {
            name: 'Advanced AI Camera'
        },
        {
            name: 'Voice Feedback'
        },
        {
            name: 'Complete Plans'
        },
        {
            name: 'Real Time Feedback'
        },
        {
            name: 'Rep Counter'
        },
        {
            name: 'Saved Workout Videos'
        },
        {
            name: 'Activity History'
        },
        {
            name: 'Voice Commands'
        },
    ]

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
    <div id='benefits' className={`py-20 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
        <h1 className='xl:text-9xl md:text-7xl sm:text-6xl text-3xl italic tracking-wider font-thin text-center sm:pb-20 pb-10  mx-auto'>REVOLUTIONIZE YOU</h1>
        <h2 className='sm:text-6xl text-5xl font-semibold text-center mb-20 mx-auto'>BENEFITS</h2>
        <div ref={animatedDiv} className='opacity-0 transform translate-y-20 transition duration-700 ease-in-out md:gap-32 gap-10 flex justify-center items-center flex-wrap'>
            <ul className='border-2 m-2 border-customBlue2 p-8 rounded-xl flex flex-col gap-4 min-w-[300px] w-[350px]'>
                {
                    benefits.map((benifit, index)=>{
                        return(
                            <li key={index} className='flex justify-between items-center'>
                                <h4 className='text-md font-semibold'>{benifit.name}</h4>
                                <img src="assets/images/check-icon.png" className='w-6 h-6' alt="check-icon" />
                            </li>
                        )
                    })
                }
            </ul>
            <div className='flex p-8 flex-col gap-10 justify-center items-start w-[600px]'>
                <p className='text-2xl'>
                    To benefits of all the features of FitSnap, the ideal tablet featuring 8GB RAM and an immersive 11-inch screen should offer a balance of performance, display quality  
                </p>
                <button className='border-2 border-customBlue2 text-customBlue2 px-5 font-semibold text-xl py-3 rounded-full flex justify-center items-center sm:gap-4 gap-2'>
                    <h4>Download Brochure</h4>
                    <img src="assets/images/arrow-sign.png" alt="arrow-sign" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default FitsnapTheme(Benefits)
