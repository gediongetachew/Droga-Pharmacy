"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import logo from "../../public/Ema.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import Link from "next/link";
export default function Fotter({ bg, top }: { bg?: string; top?: number }) {
  const [showSocial, setShowSocial] = useState(true);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isInFooter =
          footerRect.top <= window.innerHeight && footerRect.bottom >= 0;
        setShowSocial(isInFooter);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid
      container
      id="footer"
      sx={{ background: bg || "white", height: "auto", paddingTop: top || 0 }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          background: "black",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          paddingLeft: { xs: 4, md: 5, lg: 10 },
          paddingRight: { xs: 4, md: 20, lg: 20 },
          paddingTop: { xs: 8, md: 15 },
          paddingBottom: 5,
          gap: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Image src={logo} alt="logo" width={100} height={100} />
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "20px" },
              fontWeight: "regular",
              fontFamily: "Plus Jakarta Sans",
              color: "#F3EFEF",
              textAlign: "left",
            }}
          >
            feel free to contact us we'll get back to you shortly
          </Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  backgroundColor: "#2A2A2A",
                  borderRadius: "24px",
                },
                "& .MuiInputLabel-root": {
                  color: "#999999",
                  transform: "translate(14px, 12px) scale(1)",
                  fontFamily: "Inter",
                  "&.Mui-focused, &.MuiFormLabel-filled": {
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#999999",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { xs: "8px", md: "13px" },
                  paddingLeft: "14px",
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  backgroundColor: "#2A2A2A",
                  borderRadius: "24px",
                },
                "& .MuiInputLabel-root": {
                  color: "#999999",
                  transform: "translate(14px, 12px) scale(1)",
                  "&.Mui-focused, &.MuiFormLabel-filled": {
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#999999",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { xs: "8px", md: "13px" },
                  paddingLeft: "14px",
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  sx={{
                    borderRadius: "100%",
                    color: "#FCEE23",
                    "&.Mui-checked": {
                      color: "#FCEE23",
                    },
                    "&.MuiSvgIcon-root": {
                      backgroundColor: checked ? "#FCEE23" : "transparent",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "#999999",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  i agree with the{" "}
                  <Box component="span" sx={{ color: "#FCEE23" }}>
                    Terms & Conditions
                  </Box>
                </Typography>
              }
              sx={{ marginBottom: 2 }}
            />
          </form>
          <Button
            sx={{
              width: { xs: "150px", md: "160px" },
              height: { xs: "42px", md: "60px" },
              paddngY: { xs: 1, md: 4 },
              fontSize: { xs: "12px", md: "15px" },
              fontWeight: 700,
              borderRadius: "95px",
              fontFamily: "Plus Jakarta Sans",
              color: "black",
              background: "#FCEE23",
              marginTop: 2,
            }}
          >
            Get In Touch
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
            textAlign: "left",
            marginTop: { xs: 0, md: 6 },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#E0E0E0"
            sx={{
              marginBottom: { xs: 0 },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              fontSize: { xs: 20 },
            }}
          >
            Companies
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            {" "}
            Ema
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Droga Pharmacy
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Trust Pharma
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Droga Physioterapy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
            textAlign: "left",
            marginTop: { xs: 0, md: 6 },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="#E0E0E0"
            sx={{
              marginBottom: { xs: 0 },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              fontSize: { xs: 20 },
            }}
          >
            Companies
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            {" "}
            Ema
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Droga Pharmacy
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Trust Pharma
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Droga Physioterapy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
            textAlign: "left",
            marginTop: { xs: 0, md: 6 },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="#E0E0E0"
            sx={{
              marginBottom: { xs: 0 },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              fontSize: { xs: 20 },
            }}
          >
            Companies
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            {" "}
            Ema
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Droga Pharmacy
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Trust Pharma
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              color: "#F3EFEF",
              fontSize: { xs: 16 },
            }}
          >
            Droga Physioterapy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginRight: { xs: 0, md: -20 },
            marginLeft: { xs: "90%", md: 0 },
            width: { xs: "20%", sm: "15%", md: "5%" },
            marginTop: { xs: 0, md: 8 },
            paddingY: 1,
            height: "45%",
            background: "#FCEE23",
            alignItems: "center",

            borderTopLeftRadius: "24px",
            borderBottomLeftRadius: "24px",
          }}
        >
          <LinkedInIcon
            sx={{
              color: "black",
              width: "30px",
              height: "30px",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
          <XIcon
            sx={{
              color: "black",
              width: "30px",
              height: "30px",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
          <InstagramIcon
            sx={{
              color: "black",
              width: "30px",
              height: "30px",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
          <FacebookIcon
            sx={{
              color: "black",
              width: "30px",
              height: "30px",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "black",
          padding: { xs: 2, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center" },
              width: { xs: "85%", md: "18%" },
              marginX: { xs: 0, md: 11 },
              alignItems: "center",
              gap: { xs: 1, sm: 10, md: 2 },
            }}
          >
            <Image
              src={logo}
              alt="logo"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Segoe UI",
                fontSize: { xs: "8px", sm: "10px", md: "12px" },
                fontWeight: 400,
                color: "#999A9A",
              }}
            >
              © The Droga Pharma Ltd 2024 | Company
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontSize: { xs: "8px", sm: "10px", md: "12px" },
              color: "#999A9A",
            }}
          >
            Powered By Droga Consulting @2024
          </Typography>
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontSize: { xs: "8px", sm: "10px", md: "12px" },
              fontWeight: 400,
              color: "#999A9A",
            }}
          >
            All Rights Reserved |{" "}
            <Link href="/privacy-policy"> Privacy Policy</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
