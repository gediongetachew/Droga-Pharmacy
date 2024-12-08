import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Values() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        background: "white",
        padding: { xs: 2, sm: 4, lg: 4 },
        paddingLeft: { xs: 1, lg: 10 },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          gap: { xs: 3, lg: 5 },
          marginBottom: { xs: 4, lg: 5 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "30px", md: "40px", lg: "45px" },
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            color: "black",
            width: { xs: "100%", lg: "50%" },
          }}
        >
          What benefits are waiting for you?
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "20px",
              lg: "18px",
              xl: "20px",
            },
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            color: "#777777",
            width: { xs: "100%", lg: "60%", xl: "65%" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Tristique dignissim sed diam
          eros hac risus pharetra quis. Eu sollicitudin ut quis a.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          marginBottom: { xs: 3, lg: 8, xl: 9 },
          gap: { xs: 3, lg: 10, xl: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: 3, lg: 2 },
            width: { xs: "100%", lg: "40%" },
            height: { xs: "auto", lg: "280px" },
            minHeight: { xs: "200px", lg: "250px" },
            border: "1px solid #737373",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "28px", md: "30px", lg: "36px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              color: "black",
              marginBottom: { xs: 2, lg: 1 },
            }}
          >
            Competitive Salary
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "20px",
                lg: "18px",
                xl: "20px",
              },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              color: "#737373",
              width: { xs: "100%", lg: "90%" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim quis elit arcu quam
            fringilla turpis ornare amet. Accumsan tristique neque id molestie
            phasellus egestas. Lectus suspendisse elit massa viverra adipiscing
            faucibus donec est. Arcu purus donec morbi amet est vivamus magna.
            Odio at neque fermentum .
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: 3, lg: 2 },
            width: { xs: "100%", lg: "40%" },
            height: { xs: "auto", lg: "280px" },
            minHeight: { xs: "200px", lg: "250px" },
            border: "1px solid #737373",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "28px", md: "30px", lg: "36px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              color: "black",
              marginBottom: { xs: 2, lg: 1 },
            }}
          >
            Professional Growth
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "20px",
                lg: "18px",
                xl: "20px",
              },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              color: "#737373",
              width: { xs: "100%", lg: "90%" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Varius quis pretium in sed
            ultrices aliquam. Tellus id nibh et amet mattis. Mi id neque rhoncus
            sit adipiscing est dui interdum ac. Nulla velit ut elementum ac sed
            at pretium dui.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          marginLeft: { xs: 0, lg: 10 },
          marginBottom: { xs: 3, lg: 5 },
          gap: { xs: 3, lg: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: 3, lg: 2 },
            width: { xs: "100%", lg: "45%" },
            height: { xs: "auto", lg: "280px" },
            minHeight: { xs: "200px", lg: "250px" },
            border: "1px solid #737373",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "28px", md: "30px", lg: "36px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              color: "black",
              marginBottom: { xs: 2, lg: 1 },
            }}
          >
            Health Care Insurance
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "20px",
                lg: "18px",
                xl: "20px",
              },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              color: "#737373",
              width: { xs: "100%", lg: "90%" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim quis elit arcu quam
            fringilla turpis ornare amet. Accumsan tristique neque id molestie
            phasellus egestas. Lectus suspendisse{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: 3, lg: 2 },
            width: { xs: "100%", lg: "45%" },
            height: { xs: "auto", lg: "250px" },
            minHeight: { xs: "200px", lg: "280px" },
            border: "1px solid #737373",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "28px", md: "30px", lg: "36px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              color: "black",
              marginBottom: { xs: 2, lg: 1 },
            }}
          >
            Fun Team Events
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "20px",
                lg: "18px",
                xl: "20px",
              },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              color: "#737373",
              width: { xs: "100%", lg: "90%" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim quis elit arcu quam
            fringilla turpis ornare amet. Accumsan tristique neque id molestie
            phasellus egestas. Lectus suspendisse elit massa viverra adipiscing
            faucibus donec est.{" "}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
