"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

// Define the type for a card
interface Card {
  src: string;
  img: string;
  alt: string;
}

// Define props interface
interface ImageCarouselProps {
  cards: Card[];
  backgroundColor?: string; // Optional prop for background color
  height?: string | number; // Optional prop for height
}

export default function ImageCarousel({ 
  cards, 
  backgroundColor = "black", 
  height = '200px' 
}: ImageCarouselProps) {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  return (
    <Grid container>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          height: {xs:'150px', md:height},
          backgroundColor: backgroundColor,
        }}
      >
        <Grid item xs={12} marginTop={2}>
          <Swiper
            spaceBetween={2}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: direction === "backward",
            }}
            speed={6000}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
            onMouseEnter={() => setDirection('backward')}
            onMouseLeave={() => setDirection('forward')}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} style={{ height: "100%" }}>
                <Link href={`/${card.src}`} passHref>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '200px',
                      width: {
                        xs: '80px',
                        sm: '150px',
                        md: '200px',
                        lg: '250px',
                        xl: '150px'
                      }
                    }}
                  > 
                    <Image 
                      src={card.img}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 480px) 100px, 
                             (max-width: 768px) 150px,
                             (max-width: 1024px) 200px,
                             (max-width: 1280px) 250px,
                             300px"
                      style={{
                        objectFit: "contain",
                        width: '100%',
                        maxWidth: '100%',
                        filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease-in-out',
                       
                      }}
                    />
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Grid>
  );
}
