import React from 'react'
import Hero from '../Pages/Hero.jsx'
import Products from './Products.jsx'
import WhatsAppFAB from '../compontens/WhatsAppFAB.jsx'

const Home = () => {
  return (
   <div className="w-full">
      <Hero  />
      <Products/>
      <WhatsAppFAB />
   </div>
  )
}

export default Home