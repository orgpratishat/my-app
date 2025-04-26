import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Discover from '../components/Discover'
import SurverysAndReports from '../components/SurverysAndReports'
import AskOurIntelligence from '../components/AskOurIntelligence'
import Testimonials from '../components/Testimonials'

const Landing = () => {
  return (
    <div className='bg-gradient-to-br from-[#777EFF]/40 via-white to-[#CF31F6]/40'>
      <Hero/>
      <Features/>
      <Discover/>
      <SurverysAndReports/>
      <Testimonials/>
      <AskOurIntelligence/>
    </div>
  )
}

export default Landing
