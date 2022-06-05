import './App.css';
import React from 'react'
import Header from './components/header/header';
import Hero from './components/sections/hero/hero';
import Feature from './components/sections/features/feature';
import Contact from './components/sections/contact/contact';

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Feature></Feature>
      <Contact></Contact>
    </>
  )
}

export default App;
