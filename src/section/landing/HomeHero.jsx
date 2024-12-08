"use client";
import { useEffect, useState } from "react";
import { Box, IconButton, Grid, Typography, useMediaQuery } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Image from "next/image";
import star from "../../../public/star.svg";
import HomeHeroImage from "../../../public/HomeHero.png";
import HomeHeroImageSmall from "../../../public/HomeHero2.png";

const backgroundImages = [
  HomeHeroImage,
  HomeHeroImage,
  HomeHeroImage,
];

const HomeHero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = backgroundImages.length;

  const isSmallScreen = useMediaQuery('(max-width:1000px)');

  useEffect(() => {
    if (!inView) {
      setShowVideo(false);
      setIsFirstTime(true);
    }
  }, [inView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [totalImages]);

  return (
    <Grid container sx={{ width: "100%", height:'125vh' }}>
      <Grid
        item
        ref={ref}
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 0,
          height: {xs:"125vh", sm:"125vh",md:"125vh",lg:"125vh", xl:"125vh"},
          width: "100%",
          paddingX: { xs: "5%" },
          paddingTop:{xs:5, md:0},
          position: "relative"
        }}
      >
        {backgroundImages.map((img, index) => (
          <Image
            key={index}
            src={isSmallScreen ? HomeHeroImageSmall : img}
            alt={`Hero background ${index + 1}`}
            fill
            priority={index === 0}
            style={{
              objectFit: "cover",
              zIndex: -1,
              opacity: currentImageIndex === index ? 1 : 0,
              transition: "opacity",
            }}
            quality={100}
          />
        ))}

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "3%", md: "3%" },
            right: { xs: "8%", md: "8%" },
            zIndex: 2,
            width: { xs: "50px", md: "70px" },
            height: { xs: "50px", md: "70px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundImage: `url('/circle.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: { xs: "20px", md: "28px" },
              fontWeight: "700",
              fontFamily: "Pota One",
            }}
          >
            {currentImageIndex + 1}
          </Typography>
        </Box>

        <Grid
          item
          xs={12}
          md={12}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            justifyContent: "flex-start",
            alignContent: "flex-end",
            marginTop: {
              xs: "30px",
              sm: "40px",
              md: "110px",
              lg:'255px'
            },
            height: "100%",
            gap: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "left",
              color: "black",
              position: "relative",
              zIndex: 1,
              fontSize: { xs: "48px", sm: "80px", md: "95px", lg: "96px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600
            }}
          >
            Serving the People
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              color: "#737373",
              fontSize: { xs: "13px", sm: "20px", md: "25px", lg: "18px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
            }}
          >
            Droga Pharma Pvt. Ltd. Co., based in Addis Ababa, Ethiopia, focuses
            on sustainably supplying quality medicines, sutures, orthopedic
            implants, disposable medical devices, and diagnostic equipment at
            competitive prices.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            pl: 8,
            justifyContent: "center",
            alignItems: {xs:"left", lg:"flex-end"},
            height: "100%",
            ml: {xs:-5, lg:"auto"},
            gap: 2,
            marginTop: {
              xs: "450px",
              sm: "30px",
              md: "30px",
              lg:-5
            },
          
          }}
        >
          <Image
            src={star}
            alt="star"
            width={100}
            height={100}
            style={{
              display: "block",
              height: "auto",
              marginRight: 'auto',
              marginTop:{xs:0, md:-20},
              width: "clamp(10px, 10vw, 80px)", // responsive width
            }}
            sx={{
              width: {
                xs: "6px", // mobile
                sm: "90px", // tablet
                md: "85px", // small desktop
                lg: "80%", // large desktop
              },
              height: "auto",
            }}
          />
          <Typography
            sx={{
              textAlign: "left",
              color: "#737373",
              fontSize: { xs: "13px", sm: "20px", md: "25px", lg: "18px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              width: "100%",
            }}
          >
        Lorem ipsum dolor sit amet consectetur. Placerat platea mauris donec a purus hac. Lobortis sit ac.
          </Typography>
        </Grid>

        {!showVideo && (
          <>
            <Box
              sx={{
                position: "absolute",
                bottom: {xs:"14px", md:"8px"},
                zIndex: 2
              }}
            >
              <IconButton
                onClick={() => {
                  const rootElement = document.getElementById("root-body");
                  if (rootElement) {
                    rootElement.style.overflowY = "hidden";
                  }
                  isFirstTime && setIsFirstTime(false);
                  setShowVideo(true);
                }}
                sx={{
                  scale: {xs:1.5, sm:2, md:1.8},
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                  marginBottom:{xs:3, md:5},
                  color: "black",
                  borderRadius: "100%",
                  background:'#FCEE23'
                }}
              >
                  <PlayArrowIcon sx={{scale: {xs:.8, md:1} , color:'black'}} />
               </IconButton>
            </Box>

            <motion.div
              style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "black",
                zIndex: 10,
                position: "absolute",
                top: 0,
              }}
              initial={{ x: isFirstTime ? -3000 : 0 }}
              animate={{ x: -3000 }}
              transition={{ duration: 1.5 }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: "32px",
                  right: "48px",
                  color: "grey.300",
                  zIndex: 10,
                }}
                onClick={() => setShowVideo(false)}
              >
                <IoMdClose size={38} />
              </IconButton>
            </motion.div>
          </>
        )}

        {showVideo && (
          <motion.div
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "black",
              zIndex: 1000000,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
            initial={{ x: -3000 }}
            animate={{ x: showVideo ? 0 : -3000 }}
            transition={{ duration: 1.4 }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "32px",
                right: "48px",
                color: "grey.300",
                zIndex: 10000001,
              }}
              onClick={() => {
                document.body.style.overflowY = "scroll";
                setShowVideo(false);
              }}
            >
              <IoMdClose size={28} />
            </IconButton>

            <Player
              style={{
                width: "100%",
                height: "100%",
              }}
              autoPlay
              controls={false}
              stopOnUnmount
              playsInline
            >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </motion.div>
        )}
      </Grid>
    </Grid>
  );
};

export default HomeHero;
