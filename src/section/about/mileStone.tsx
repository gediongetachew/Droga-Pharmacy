import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";

export default function mileStone() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: '950px',sm:'1500px', md: "600px", lg:'750px', xl:'950px' },
        background:'white'
      }}
    >
      <Box
        sx={{
          display:{xs:'none', md:'flex'},
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        <Image
          src="/mileStone.svg"
          alt="milestone"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          display:{xs:'flex', md:'none'},
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          overflowX: "auto",
        }}
      >
        <Image
          src="/milestoneVertical.svg"
          alt="milestone"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
          color: "black",
          paddingLeft: {xs:5,md:10,lg:15},
          paddingTop: {xs:0,sm:5},
          fontSize: { xs: 30, sm:35, md: "60px" },
        }}
      >
        Our Journey
      </Typography>
    </Box>
  );
}
