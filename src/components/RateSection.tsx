import { Box, Typography, Avatar, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useEffect, useState } from "react";
import { toNamespacedPath } from "node:path/posix";

interface review {
 
  
  "name": string,
  "email": string,
  "rate": number,
  "body": string
  }

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function ReviewCard({name,rate,body, email}: review) {
  
 

  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "16px",
        p: 3,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        minWidth: { xs: "300px", md: "auto" },
        flex: { md: 1 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flex: "1 1 auto",
            minWidth: "200px",
          }}
        >
          <Avatar
            src="/Ema.png"
            alt="Fitsum Haile"
            sx={{
              width: 48,
              height: 48,
              border: "2px solid white",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />

          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "medium",
                color: "#333",
                mb: 0.5,
                fontFamily: "Inter",
              }}
            >
             {name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: "0.675rem",
                fontFamily: "Inter",
              }}
            >
            {email}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexShrink: 0,
          }}
        >
        
          <Rating
        name="text-feedback"
        value={rate}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      
          
        </Box>
      </Box>

      <Typography
        sx={{
          color: "#666",
          fontSize: "0.675rem",
          lineHeight: 1.6,
          letterSpacing: "0.1px",
          fontFamily: "Inter",
          pl:{xs:0, md:8}
        }}
      >
       {body}
      </Typography>
    </Box>
  );
}
