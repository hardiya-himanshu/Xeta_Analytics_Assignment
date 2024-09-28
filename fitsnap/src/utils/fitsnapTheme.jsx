import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../store/themeSlice'

const FitsnapTheme = (WrappedComponent) => {

    return (props)=>{
  
        try {
            const darkMode = useSelector((state) => state.theme.darkMode);
            const dispatch = useDispatch();
            const handleTheme = () => {
                dispatch(toggleTheme());
            };
    
            return (
                <div>
                    <WrappedComponent {...props} darkMode={darkMode} onToggleTheme={handleTheme} />
                </div>
            );
        } catch (error) {
            console.error("Error in FitsnapTheme HOC:", error);
            return null; // or some fallback UI
        }
    }
}

export default FitsnapTheme 
