"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import aboutImage from "../../../public/aboutus.png";
import logo from "../../../public/logo.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SouthIcon from "@mui/icons-material/South";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect, useRef } from "react";
import { Paper } from "@mui/material";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && playVideo) {
          setPlayVideo(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [playVideo]);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const nextSection = document.getElementById('openPositions');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        paddingX: { xs: "5%" },
        background: "white",
        paddingY: { xs: 10 },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          gap: { xs: 4, md:3,lg:4},
          marginTop: { xs: 5, md: 11 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "48px" },
            width: "100%",
            fontWeight: 600,
            color: "#000000",
            fontFamily: "Plus Jakarta Sans",
            textWrap: "nowrap",
          }}
        >
          Join Our Team
        </Typography>

        <Typography
          sx={{
            width: "100%",

            color: "#737373",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 400,

            fontSize: { xs: "12px", sm: "18px", md: "18px", lg:'24px' },
          }}
        >
          At Droga Pharma, we believe in fostering a truly employee-centered
          environment where every team member feels valued and empowered. We
          take pride in supporting our employees’ self-development and career
          growth, creating a culture where each individual has the autonomy to
          make meaningful decisions and contribute in impactful ways. Our
          commitment goes beyond just work; we’re dedicated to helping our team
          thrive personally and professionally.
        </Typography>
        <Typography
          sx={{
            width: "100%",

            color: "#737373",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 400,

            fontSize: { xs: "12px", sm: "18px", md: "18px", lg:'24px' },
          }}
        >
          Explore the roles we’re hiring for below and find your place within
          our dynamic, people-first culture!
        </Typography>

        <Button
          component="a"
          href="#openPositions"
          onClick={handleScroll}
          sx={{
            borderRadius: "100px",
            width: {
              xs: "200px",
              md: "243px",
            },
            paddingX: { xs: 1, md: 2 },
            paddingY: { xs: 2, md: 3 },
            marginTop: { xs: 2, md: 4,gl:8 },
            fontFamily: "Roboto",
            textWrap: "nowrap",
            color: "black",
            background: "#FCEE23",
            fontSize: { xs: "10px", sm: "16px", md: "18px", lg:'20px'},
            '&:hover': {
              background: "#FCEE23",
              opacity: 0.9,
            },
          }}
        >
          Open Positions
          <SouthIcon />
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: 5, md: 11 },
        }}
      >
        <Box
          ref={videoRef}
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "55vh", md: "80vh" },
            borderRadius: "20px",
            zindex: 1,
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: playVideo ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
              zIndex: 1,
            }}
          >
            <Image
              src={aboutImage}
              alt="about us"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: playVideo ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              zIndex: playVideo ? 1 : 0,
            }}
          >
            {playVideo && (
              <iframe
                src="https://www.youtube.com/embed/5D8TBicNIb8?si=x658Sysm10QHsnof&amp;controls=0&autoplay=1"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </Box>

          {!playVideo && (
            <Box
              onClick={handlePlayVideo}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                width: { xs: "50px", md: "70px" },
                height: { xs: "50px", md: "70px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 2,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.8)",
                  transform: "translate(-50%, -50%) scale(1.1)",
                },
              }}
            >
              <PlayArrowIcon
                sx={{
                  color: "#FCEE23",
                  fontSize: { xs: "30px", md: "40px" },
                }}
              />
            </Box>
          )}

          <Paper
            sx={{
              position: "absolute",
              top: "0%",
              right: "0%",
              width: { xs: "40%",sm:'40%', md: "50%",lg:'40%' },
              height: { xs: "10%",sm:'15%', md: "10%", lg:'10%' },
              zIndex: 3,
              background: "white",
              borderBottomLeftRadius: "20px",
              overflow: 'hidden',
             
            
            }}
          >
            <Image
              src={logo}
              alt="about us"
              fill
              style={{ objectFit: "contain" }}
            />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
