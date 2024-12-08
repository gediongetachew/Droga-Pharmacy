"use client";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton, List, ListItem, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const navItems = ["Home", "About", "Products", "Companies", "Careers", "Media"];

export default function Nav() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const path = pathname.slice(1);
    const index = navItems.findIndex((item) => item.toLowerCase() === path);
    setActive(index !== -1 ? index : 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string, index: number) => {
    setActive(index);
    let newPath = path.toLowerCase();
    router.replace(`/${newPath}`);
    setMobileOpen(false); // Close drawer after navigation
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid
      container
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: { xs: "10px 20px", md: "20px 40px" },
        background: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Mobile View */}
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Image src={logo} alt="logo" width={100} height={40} />
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "black" }}>
          <MenuIcon />
        </IconButton>
      </Grid>

      {/* Desktop View */}
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: { xs: "10%", sm: "15%", md: "10%", lg: "20%", xl: "20%" },
          }}
        >
          <Image
            src={logo}
            alt="logo"
            layout="responsive"
            width={100}
            height={40}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { md: "70%", lg: "50%" },
            height: "100%",
            borderRadius: "60px",
            background: "black",
            paddingX: 2,
            paddingY: { md: 1 },
          }}
        >
          {navItems.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleNavigation(item, index)}
              sx={{
                color: active === index ? "#FCEE23" : "#B4B4B4",
                background: active === index ? "#242424" : "transparent",
                textTransform: "none",
                width: { md: "120px", lg: "140px" },
                fontSize: {
                  md: "16px",
                  lg: "16px",
                },
                fontFamily: "Plus Jakarta Sans",
                borderRadius: "40px",
                mx: 0.5,
                "&:hover": {
                  background:
                    active === index ? "#242424" : "rgba(36, 36, 36, 0.5)",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Button
          component="a"
          href="/contact"
          sx={{
            color: "black",
            background: "#FCEE23",
            width: { md: "150px", lg: "174px" },
            height: "73px",
            borderRadius: "40px",
            fontFamily: "Plus Jakarta Sans",
            fontSize: { md: "16px", lg: "16px" },
          }}
        >
          Contact Us
        </Button>
      </Grid>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "50%", sm: "50%" },
            minWidth: "280px",
            maxWidth: "600px",
            background: "black",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          "& .MuiPaper-root": {
            width: { xs: "50%", sm: "50%" },
            maxWidth: "600px",
          },
        }}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            color: "white",
            "&:hover": {
              color: "#FCEE23",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <List
          sx={{
            mt: 8,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            height: "70%",
            justifyContent: "space-evenly",
          }}
        >
          {navItems.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => handleNavigation(item, index)}
              sx={{
                cursor: "pointer",
                width: "60%",
                height: "50px",
                borderRadius: "40px",
                backgroundColor: active === index ? "#242424" : "transparent",
                "&:hover": {
                  backgroundColor: "#242424",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                border: "none",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: active === index ? "#FCEE23" : "#B4B4B4",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {item}
              </Typography>
            </ListItem>
          ))}
          <ListItem
            sx={{
              cursor: "pointer",
              width: "60%",
              height: "50px",
              borderRadius: "40px",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
          >
            <Button
              component="a"
              href="/contact"
              sx={{
                color: "black",
                background: "#FCEE23",
                width: "100%",
                height: "100%",
                borderRadius: "40px",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "18px",
                fontWeight: 500,
                "&:hover": {
                  background: "#e5d620",
                },
              }}
            >
              Contact Us
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Grid>
  );
}
