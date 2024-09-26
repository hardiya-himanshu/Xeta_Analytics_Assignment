import React, { useState } from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'


function Header({darkMode, onToggleTheme}) {

    const navItems = [
        {
          name: 'Home'
        }, 
        {
          name: "Login",
        },
    ]
  return (
    <div className='fixed left-0 right-0 z-50'>
        <nav className={`${darkMode?"bg-customDark/30 text-customWhite":"bg-customWhite/30 text-customBlack"} backdrop-blur-sm flex justify-between items-center py-2 px-10 text-xl font-semibold`}>
            
            {/* FITSNAP LOGO */}
            <div >
                <img src="/assets/images/fitsnap-logo.png" width='150px' alt="viitube-logo" />
            </div>

            {/* NAVITEMS */}
            <div>
                <ul className='flex ml-auto flex-wrap items-center justify-center'>
                {navItems.map((item, index) =>(
                    <li key={index}>
                        <button
                        className=' px-6 py-2 mx-3'
                        >{item.name}
                        </button>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                {/* CONTACT US BUTTON*/}
                <div>
                    <button className={`py-2 mx-3 border-blue-900 ${darkMode?"bg-white/50":"bg-black/50"} text-blue-900 border-2 px-4 rounded-full font-semibold cursor-pointer`}>
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default FitSnapTheme(Header)
