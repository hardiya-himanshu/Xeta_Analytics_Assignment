import React from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'

function Benifits({darkMode}) {

    const benifits = [
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
  return (
    <div className={`py-20 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
        <h1 className='text-9xl italic tracking-wider font-thin text-center pb-20  mx-auto'>REVOLUTIONIZE YOU</h1>
        <h2 className='text-6xl font-semibold text-center mb-20 mx-auto'>BENEFITS</h2>
        <div className='gap-32 flex justify-center items-center'>
            <ul className='border-2 border-customBlue2 p-8 rounded-xl flex flex-col gap-4 min-w-[350px]'>
                {
                    benifits.map((benifit, index)=>{
                        return(
                            <li key={index} className='flex justify-between items-center'>
                                <h4 className='text-md font-semibold'>{benifit.name}</h4>
                                <img src="assets/images/check-icon.png" className='w-6 h-6' alt="check-icon" />
                            </li>
                        )
                    })
                }
            </ul>
            <div className='flex flex-col gap-10 justify-center items-start w-[600px]'>
                <p className='text-2xl'>
                    To benefits of all the features of FitSnap, the ideal tablet featuring 8GB RAM and an immersive 11-inch screen should offer a balance of performance, display quality  
                </p>
                <button className='border-2 border-customBlue2 text-customBlue2 px-5 font-semibold text-xl py-3 rounded-full flex justify-center items-center gap-4'>
                    <h4>Download Brochure</h4>
                    <img src="assets/images/arrow-sign.png" alt="arrow-sign" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default FitSnapTheme(Benifits)
