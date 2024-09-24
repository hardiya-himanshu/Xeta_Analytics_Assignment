import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Intro from './components/pages/Intro'
import Details from './components/pages/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Intro/>
        <Details/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
