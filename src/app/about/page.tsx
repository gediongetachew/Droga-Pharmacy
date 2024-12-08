'use client'
import Fotter from '@/component/Fotter'
import FoundersMessage from '@/section/about/FoundersMessage'
import Hero from '@/section/about/Hero'
import React from 'react'
import WhatGuidesUs from '@/section/about/whatGuidesUs'
import JourneySection from '@/section/about/mileStone'
import OurPartners from '@/section/about/OurPartners'
import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'

// Dynamically import TestimonialSwiper with client-side only rendering
const TestimonialSwiper = dynamic(
  () => import('@/components/TestimonialSwiper'),
  { ssr: false }
)


export default function page() {
  return (
    <div>
        <Hero />
        <FoundersMessage />
        <Grid item xs={12} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <FoundersMessage reverse={true} />
        </Grid>
        <WhatGuidesUs />
        <JourneySection />
        <OurPartners />
        <TestimonialSwiper />
        <Fotter />
    </div>
  )
}
