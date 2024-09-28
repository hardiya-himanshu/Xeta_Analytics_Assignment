import React, {useRef, useEffect} from 'react'
import FitsnapTheme from '../../utils/FitsnapTheme'

function Clients({darkMode}) {
    const animatedDiv = useRef(null);
  const reviews = [
    {
      name: "Riya Awasthi",
      review: "I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs",
      image: "/assets/images/client-1.jpeg"
    },
    {
      name: "Aarav Malhotra",
      review: "FitSnap has transformed my workouts! AI suggestions are spot on and keep me injury-free.",
      image: "/assets/images/client-2.jpeg"
    },
    {
      name: "Sana Kapoor",
      review: "FitSnap makes staying fit so easy. The real-time updates motivate me to push harder every day!",
      image: "/assets/images/client-3.jpeg"
    },
    {
      name: "Kabir Singh",
      review: "The personalized workout plans from FitSnap have made my gym sessions more effective and efficient.",
      image: "/assets/images/client-4.avif"
    },
    {
      name: "Nisha Verma",
      review: "FitSnap’s injury prevention tips have been a game changer for me! I feel safer while training.",
      image: "/assets/images/client-5.jpg"
    },
    {
      name: "Ishaan Bhatt",
      review: "I love how FitSnap tracks my progress with data-driven insights. My fitness journey feels effortless!",
      image: "/assets/images/client-6.avif"
    }
  ]

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
    <div id='reviews' className={`pt-14 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
      <h1 className='sm:text-6xl text-5xl font-semibold text-center mt-16 mb-16 max-w-[800px] mx-auto'>WHAT OUR CLIENTS SAY ABOUT US</h1>
      <div ref={animatedDiv} className='opacity-0 transform translate-y-20 transition duration-700 ease-in-out  '>
      <div className='overflow-x-scroll scrollbar-hide scroll-smooth flex gap-4 sm:px-20 px-4 pb-10  items-center'>
        {reviews.map((review, index) => (
          <div key={index} className='min-w-[280px] w-[500px] sm:min-w-[500px] flex flex-col justify-between items-start h-[500px] border-2 border-customBlue2 rounded-md p-10 shadow-lg shadow-customBlue2/50'>
            <div>
            <p className='text-xl'>{review.review}</p>
            </div>
            <div className='flex gap-5 justify-start  items-center'>
            <img src={review.image} alt={review.name} className='w-16 h-16 rounded-full object-cover'/>
            <h3 className='text-xl'>{review.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default FitsnapTheme(Clients)
