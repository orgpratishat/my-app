import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Discover from '../components/Discover'
import SurverysAndReports from '../components/SurverysAndReports'
import AskOurIntelligence from '../components/AskOurIntelligence'

const Landing = () => {
  return (
    <div className='bg-gradient-to-br from-[#777EFF]/50 via-white/70 to-[#CF31F6]/70'>
      <Hero/>
      <Features/>
      <Discover/>
      <SurverysAndReports/>
      <AskOurIntelligence/>
    </div>
  )
}

export default Landing
