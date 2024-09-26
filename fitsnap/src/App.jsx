import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Intro from './components/pages/Intro'
import Details from './components/pages/Details'
import Features from './components/pages/Features'
import Tutorial from './components/pages/Tutorial'
import Clients from './components/pages/Clients'
import ThingsYouNeed from './components/pages/ThingsYouNeed'
import Benifits from './components/pages/Benifits'
import Contact from './components/pages/Contact'
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
        <Benifits/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
