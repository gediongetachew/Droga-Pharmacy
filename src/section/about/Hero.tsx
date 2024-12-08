import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import logo from "../../../public/logo.png";
import aboutHero2 from '../../../public/aboutHero2.svg'
import Image from "next/image";

export default function Hero() {
  return (
    <Grid
      container
      sx={{ background: "white", height: "100vh", position: "relative" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            display:{xs:'none', md:'flex'},
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            top: 0,
            left: 0
          }}
        >
          <Image
            src={"/aboutHero.png"}
            alt="hero"
            fill
            style={{ 
              objectFit: "cover", 
              width: "100%",
              height: "100%"
            }}
          />
        </Box>
        <Box
          sx={{
            display:{xs:'flex', md:'none'},
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            top: 0,
            left: 0
          }}
        >
          <Image
            src={"/aboutHero2.svg"}
            alt="hero"
            fill
            style={{ 
              objectFit: "cover", 
              width: "100%",
              height: "100%"
            }}
          />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginBottom: {xs:10, md:4},
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 48,
                sm:55,
                md:70,
                lg: "100px",
              },
              fontWeight: 600,
              color: "black",
              fontFamily: "Plus Jakarta Sans",
              zIndex: 2,
            }}
          >
            Empowering Healthcare
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 48,
                sm:55,
                md:70,
                lg: "100px",
              },
              fontWeight: 600,
              color: "black",
              fontFamily: "Plus Jakarta Sans",
              zIndex: 2,
            }}
          >
            In Ethiopia
          </Typography>
          <Button
            sx={{
              fontSize: { xs: 24, md: "30px" },
              fontFamily: "Plus Jakarta Sans",
              marginTop:{xs:20, md:15},
              fontWeight: 700,
              textTransform:"none",
              color: "#FCEE23",
              borderRadius: "100px",
              background: "black",
              width: { xs: "200px", md: "250px" },
              height: { xs: "70px", md: "90px" },
              zIndex: 2,
            }}
          >
            Read More
          </Button>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            px: {xs:2,sm:3, md:5, lg:8},
            zIndex: 2,
            width:'100%',
          
          }}
        >
          {/* Arrow */}
          <Box
            sx={{
              flexShrink: 0,
              cursor: "pointer", // Add pointer cursor
            }}
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight, // Changed to scroll to bottom
                behavior: "smooth",
              });
            }}
          >
            <ArrowDownwardIcon
              sx={{
                scale: {xs:3,sm:3.5,md:4},
                color: "black",
                transition: "transform 0.3s ease", // Optional: add hover animation
                "&:hover": {
                  transform: "translateY(5px)",
                },
              }}
            />
          </Box>

          {/* Logo */}
          <Box
            sx={{
              position: "relative",
            
              width: { xs: "150px", sm: "200px", md: "250px" },
              height: { xs: "60px", sm: "100px", md: "120px" },
            }}
          >
            <Image
              src={logo.src}
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
