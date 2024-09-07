import React from 'react'
import Hero from '../components/Hero'
import Scroller from '../components/scroller/Scroller'

const Landing = () => {
  return (
    <div className='w-full h-full flex'>
        <Hero></Hero>
        <Scroller></Scroller>
    </div>
  )
}

export default Landing