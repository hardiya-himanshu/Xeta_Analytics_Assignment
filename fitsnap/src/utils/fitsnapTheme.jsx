import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../store/themeSlice'

const FitSnapTheme = (WrappedComponent) => {

    return (props)=>{
  
        const darkMode = useSelector((state)=>state.theme.darkMode)
        const dispatch = useDispatch()

        const handleTheme = ()=>{
            dispatch(toggleTheme())
        }

        return (
            <div>
              <WrappedComponent {...props} darkMode={darkMode} onToggleTheme={handleTheme} />
            </div>
        )
    }
}

export default FitSnapTheme 
