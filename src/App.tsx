import { useState } from 'react'

import './App.css'
import Header from './components/header';
import Hero from './components/hero';
import Skills from './components/skills';
import Featured from './components/featured';
import Posts from './components/posts';
import Footer from './components/footer';
import Work from './components/work';


function App() {

  return (
    <div className='homeBodyContainer'>
      <Header />
      <Hero />
      <Work />
      <Skills />
      <Featured />
      <Posts />

      <Footer/>
    </div>
  )
}

export default App
