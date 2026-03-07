import React from 'react'
import Hero from '../Pages/Hero.jsx'
import Products from './Products.jsx'

const Home = () => {
  return (
   <div className="max-w-7xl bg-red-000  ml-0 mx-auto">
      <Hero  />
      <Products/>
   </div>
  )
}

export default Home