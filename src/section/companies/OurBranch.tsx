import InvertedBorder from "@/component/InvertedBorder";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import OurPartners from "../about/OurPartners";
import Testimonials from "@/components/TestimonialSwiper";
import Box from "@mui/material/Box";

export default function OurBranch() {
  return (
    <Grid container sx={{ background: "#F5F5F5" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          background: "white",
          marginX: {xs:2,md:5},
          marginY: 5,
          borderRadius: "24px",
        }}
      >
        <Grid
          item
          xs={12}
       
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            paddingX: { xs: 1, sm: 3, md: 5 },
            paddingTop: { xs: 2, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "48px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              color: "black",
              width: { xs: "100", md: "40%" },
            }}
          >
            Our Branches
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "15px", lg:'22px' },
              fontFamily: "Plus Jakarta Sans",
              color: "gray",
              width: { xs: "100", md: "50%" },
              textAlign: "left",
              paddingRight: 8,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim sed diam
            eros hac risus pharetra quis. Eu sollicitudin ut quis a. Viverra
            fusce sem amet feugiat nibh pellentesque scelerisque scelerisque.
            Sed aliquam id faucibus integer pellentesque elementum risus ornare.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Grid
            container
            sx={{
              display: "flex",
              paddingX: { xs: 1, md: 2 },
              marginTop: { xs: 3, md: 0 },
              gap: {xs:4, md:2,lg:4, xl:4},
            }}
          >
            <Grid item xs={12} md={6.5}>
              <InvertedBorder
                name="somalia"
                icon="/branch.svg"
                buttonText="Visit Store"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: { xs: 2, md: 0,lg:0, xl:8 },
                gap: 2,
                paddingRight: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "25px", lg:'32px' },
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
                  width: "80%",
                  color: "black",
                }}
              >
                Droga Pharama - Somali Land
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "15px", lg:'20px'},
                  fontFamily: "Sego Ui",
                  fontWeight: 400,
                  width: "94%",
                  color: "#686868",
                }}
              >
                Welcome to Droga Pharma, where our journey began with a simple
                yet profound vision: to make healthcare accessible, sustainable,
                and reliable for everyone. As the founder of this organization,
                my mission has always been to bridge the gap between
                professional care and the communities we serve, ensuring quality
                healthcare is within everyone's reach.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "15px", lg:'20px'},
                  fontFamily: "Sego Ui",
                  fontWeight: 400,
                  width: "93%",
                  color: "#686868",
                  marginTop: { xs: 2, md: 5, lg:4, xl:10 },
                }}
              >
                Thank you for trusting us with your health and well-being.
                Together, we are building a brighter and healthier future.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection:{xs:'column-reverse', md:'row'},
              paddingX: { xs: 2, md: 5 },
              gap:0,
              paddingBottom: 5,
            }}
          >
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: { xs: 2, md: 0,lg:0, xl:8 },
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "25px", lg:'32px' },
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
                  width: "90%",
                  color: "black",
                }}
              >
                Droga Pharama - Rwanda
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "15px" , lg:'20px'},
                  fontFamily: "Sego Ui",
                  fontWeight: 400,
                  width: "90%",
                  color: "#686868",
                }}
              >
                Welcome to Droga Pharma, where our journey began with a simple
                yet profound vision: to make healthcare accessible, sustainable,
                and reliable for everyone. As the founder of this organization,
                my mission has always been to bridge the gap between
                professional care and the communities we serve, ensuring quality
                healthcare is within everyone's reach.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "15px" , lg:'20px'},
                  fontFamily: "Sego Ui",
                  fontWeight: 400,
                  width: "90%",
                  color: "#686868",
                  marginTop: { xs: 2, md: 4 , lg:4, xl:8},
                }}
              >
                Thank you for trusting us with your health and well-being.
                Together, we are building a brighter and healthier future.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6.5}>
              <InvertedBorder
                name="rwanda"
                icon="/branch.svg"
                buttonText="Visit Store"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
      >
        <OurPartners />
        <Testimonials />
      </Grid>
    </Grid>
  );
}
