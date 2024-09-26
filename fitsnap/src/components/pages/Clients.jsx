import React from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'

function Clients({darkMode}) {
  const reviews = [
    {
      name: "Riya Awasthi",
      review: "I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs",
      image: "/assets/images/client-1.jpeg"
    },
    {
      name: "Riya Awasthi",
      review: "I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs",
      image: "/assets/images/client-1.jpeg"
    },
    {
      name: "Riya Awasthi",
      review: "I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs",
      image: "/assets/images/client-1.jpeg"
    },
    {
      name: "Riya Awasthi",
      review: "I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs",
      image: "/assets/images/client-1.jpeg"
    },
    {
      name: "Riya Awasthi",
      review: "I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs",
      image: "/assets/images/client-1.jpeg"
    },
    {
      name: "Riya Awasthi",
      review: "I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs",
      image: "/assets/images/client-1.jpeg"
    },
  ]
  return (
    <div className={`pt-28 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
      <h1 className='text-6xl font-semibold text-center mt-16 mb-16 max-w-[800px] mx-auto'>WHAT OUR CLIENTS SAY ABOUT US</h1>
      <div className='overflow-x-scroll scrollbar-hide scroll-smooth flex gap-4 px-20 pb-10  items-center'>
        {reviews.map((review, index) => (
          <div key={index} className=' min-w-[500px] flex flex-col justify-between items-start h-[500px] border-2 border-customBlue2 rounded-sm p-10'>
            <div>
            <p className='text-xl'>{review.review}</p>
            </div>
            <div className='flex gap-5 justify-start  items-center'>
            <img src={review.image} alt={review.name} className='w-16 h-16 rounded-full'/>
            <h3 className='text-xl'>{review.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FitSnapTheme(Clients)
