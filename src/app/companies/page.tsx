import Hero from '@/section/companies/Hero'
import React from 'react'
import cards from '@/data/carouselCards'
import ImageCarousel from '@/component/Carousel'
import GetInTouch from '@/section/landing/getInTouch'
import Fotter from '@/component/Fotter'
import Companies from '@/section/companies/companies'
import OurBranch from '@/section/companies/OurBranch'


export default function page() {
  return (
    <div>
       
        <Hero />
        <ImageCarousel cards={cards.map(card => ({...card, img: card.img.src}))} />
          <Companies />
          <OurBranch />
        <GetInTouch />

        <Fotter />  
    </div>
  )
}
