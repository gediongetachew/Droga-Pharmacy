import Hero from '@/section/careers/Hero'
import OpenPositions from '@/section/careers/OpenPositions'
import React from 'react'
import Values from '@/section/careers/Values'
import OurTeam from '@/section/careers/OurTeam'
import Benefits from '@/section/careers/Benefits'
import Fotter from '@/component/Fotter'
export default function page() {
  return (
    <div>
        <Hero />
        <OpenPositions />
        <Values />
        <OurTeam />
        <Benefits />
        <Fotter />

    </div>
  )
}
