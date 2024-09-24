import React from 'react'

function Details() {
  return (
    <div className='flex justify-around items-center py-32'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
            <img src="/assets/gifs/detail-1.gif" width="120px" alt="" />
            <p className='text-3xl font-bold'>250+</p>
        </div>
        <div className='text-xl font-bold'>
        Users Enrolled
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
            <img src="/assets/gifs/detail-2.gif" width="120px" alt="" />
            <p className='text-3xl font-bold'>100+</p>
        </div>
        <div className='text-xl font-bold'>
        Training Time
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
            <img src="/assets/gifs/detail-3.gif" width="120px" alt="" />
            <p className='text-3xl font-bold'>50+</p>
        </div>
        <div className='text-xl font-bold'>
        Workout Sessions
        </div>
      </div>
    </div>
  )
}

export default Details
