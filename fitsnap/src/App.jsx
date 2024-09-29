import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Intro from './components/pages/Intro.jsx'
import Details from './components/pages/Details.jsx'
import Features from './components/pages/Features.jsx'
import Tutorial from './components/pages/Tutorial.jsx'
import Clients from './components/pages/Clients.jsx'
import ThingsYouNeed from './components/pages/ThingsYouNeed.jsx'
import Benefits from './components/pages/Benefits.jsx'
import Contact from './components/pages/Contact.jsx'

import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './store/themeSlice.js'

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const handleTheme = () => {
      dispatch(toggleTheme());
    };
  return (
    
    <div>
        <Header darkMode={darkMode} handleTheme={handleTheme}/>
        <Intro darkMode={darkMode}/>
        <Details darkMode={darkMode}/>
        <Features darkMode={darkMode}/>
        <Tutorial darkMode={darkMode}/>
        <Clients darkMode={darkMode}/>
        <ThingsYouNeed darkMode={darkMode}/>
        <Benefits darkMode={darkMode}/>
        <Contact darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
