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
function App() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Intro/>
        <Details/>
        <Features/>
        <Tutorial/>
        <Clients/>
        <ThingsYouNeed/>
        <Benefits/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
