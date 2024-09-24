import React, { useState } from 'react'
import FitSnapTheme from '../../utils/fitsnapTheme'

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
    <div className='absolute left-0 right-0 z-50'>
        <nav className={`bg-customWhite/30 flex justify-between items-center py-2 px-10`}>
            
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
                    <button>
                        CONTACT US
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default FitSnapTheme(Header)
