import ImageCarousel from '@/component/Carousel'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import partnersCard1 from '@/data/partnersCard1'
import partnersCard2 from '@/data/partnersCard2'
import Box from '@mui/material/Box'

export default function OurPartners() {
  return (
   <Box  sx={{height: 'auto'}}>
    <Box sx={{width:'100%'}}>
       <Typography sx={{fontSize:{xs:'40px', md:'60px'}, fontWeight:600, fontFamily:'Plus Jakarta Sans', color:'white', paddingLeft:10, paddingY:5}}>
        Our Partners
       </Typography>
    </Box>
   
    <ImageCarousel cards={partnersCard1.map(card => ({...card, img: card.img.src}))} />
    <ImageCarousel cards={partnersCard2.map(card => ({...card, img: card.img.src}))} />

   
   </Box>
  )
}
                        