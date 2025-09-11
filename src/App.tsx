import { useState } from 'react'

import './App.css'
import Header from './components/header';
import Hero from './components/hero';
import Skills from './components/skills';
import Featured from './components/featured';
import Posts from './components/posts';
import Footer from './components/footer';
import Work from './components/work';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/projects';
import Privacy from './pages/privacy';


function App() {

  return (
    <Routes>
      <Route path='/' element={<div className='homeBodyContainer'>
          <Header />
          <Hero />
          <Work />
          <Skills />
          <Featured />
          <Posts />
          <Footer/>
        </div>}/>

        <Route path='/projects' element={<Projects />}/>
        <Route path='/privacy' element={<Privacy />}/>
    </Routes>
  )
}

export default App
