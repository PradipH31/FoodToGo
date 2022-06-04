import './App.css';
import React from 'react'
import Header from './components/header/header';
import Hero from './components/sections/hero/hero';
import Feature from './components/sections/features/feature';

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Feature></Feature>
    </>
  )
}

export default App;
