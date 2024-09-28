import React, { useState } from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'
import { Link as ScrollLink} from 'react-scroll'


function Header({darkMode, onToggleTheme}) {
    const [showMenu, setShowMenu] = useState(false)
    const navItems = [
        {
          name: "Features",
          link: "features"
        },
        {
          name: "Tutorial",
          link: "tutorial"
        },
        {
          name: "Reviews",
          link: "reviews"
        },
        {
          name: "Benefits",
          link: "benefits"
        },
    ]
  return (
    <div className='fixed right-0 left-0 top-0 z-40'>
        <nav className={`${darkMode?` ${showMenu?"bg-customDark/100":"bg-customDark/50"} text-customWhite`:` ${showMenu?"bg-customLight/100":"bg-customLight/50"} text-customBlack`} backdrop-blur-sm flex justify-between items-center py-1 lg:px-10 sm:px-5 px-2 text-xl font-semibold`}>
            
            {/* FITSNAP LOGO */}
            <div >
              <ScrollLink to='intro' smooth={true} duration={100}>
                <img src={darkMode?"/assets/images/fitsnap-logo.png":"/assets/images/fitsnap-logo-dark.png"} width='150px' alt="viitube-logo" className='cursor-pointer' />
              </ScrollLink>
            </div>

            {/* NAVITEMS */}
            <div className=' hidden lg:block'>
                <ul className='flex ml-auto flex-wrap items-center justify-center'>
                {navItems.map((item, index) =>(
                    <li key={index}>
                    <ScrollLink
                        to={item.link}
                        smooth={true}
                        duration={100}
                        >
                        <button
                        className=' mx-6 py-2 cursor-pointer z-50 hover:text-blue-700 duration-300'
                        >{item.name}
                        </button>
                    </ScrollLink>
                    </li>
                ))}
                </ul>
            </div>

            <div className='flex items-center'>
              {darkMode?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer" onClick={onToggleTheme}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer" onClick={onToggleTheme}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              }

                {/* CONTACT US BUTTON*/}
                <ScrollLink to='contact' smooth={true} duration={100}>
                    <button className={`lg:block hidden py-2 mx-3 border-blue-900 bg-white text-blue-900 border-2 px-4 rounded-full font-semibold cursor-pointer`}>
                        Contact Us
                    </button>
                </ScrollLink>

                {/* MENUBAR */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer lg:hidden ml-5" onClick={()=>setShowMenu(!showMenu)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {/* MOBILE MENU */}
                {showMenu && (
                  <div className={`lg:hidden absolute top-[78px] left-0 right-0 z-50 ${darkMode?"bg-customDark/100 text-customWhite":"bg-customLight/100 text-customBlack"} backdrop-blur-xl px-10 py-5`}>

                    <ul className='flex flex-col items-center gap-3'>
                      {navItems.map((item, index) =>(
                    <li key={index}>
                    <ScrollLink
                        to={item.link}
                        smooth={true}
                        duration={100}
                        >
                        <button
                        className=' mx-auto py-2 cursor-pointer'
                        >{item.name}
                        </button>
                    </ScrollLink>
                    </li>
                      ))}
                    <li>
                    <ScrollLink to='contact' smooth={true} duration={100}>
                      <button className=' mx-auto py-2 cursor-pointer'>Contact Us</button>
                    </ScrollLink>
                    </li>
                    </ul>
                  </div>
                )}
            </div>
        </nav>
    </div>
  )
}

export default FitSnapTheme(Header)
