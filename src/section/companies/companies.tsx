"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import companiesData from "@/data/companiesData";

export default function companies() {
  const [selected, setSelected] = React.useState(1);

  useEffect(() => {
    setSelected(1);
  }, []);

  return (
    <Grid container sx={{ background: "white", display: "flex" }}>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{
          display: "flex",
          borderBottom: { xs: "1px solid gray", md: "none" },
          flexDirection: "column",
          padding: { xs: 5, md: 10 },
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "60px", lg:'80px' },
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            color: "#4F4F4F",
          }}
        >
          Companies
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 5,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "24px" },
              fontFamily: "Plus Jakarta Sans",
              color: "gray",
              fontWeight: "Medium",
            }}
          >
            we are committed to excellence, integrity, and collaboration. Each
            company operates with a shared vision to enhance lives and build
            stronger communities by providing reliable services and fostering
            innovation across industries.{" "}
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={5}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderLeft: "1px solid gray",
          marginLeft: { xs: 5, md: 0 },
          paddingTop: { xs: 4, md: 5 },
        }}
      >
        {companiesData.map((company, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: { xs: 5, md: 8 },
              zIndex: 3,
            }}
            onClick={() => {
              setSelected(index);
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "36px" },
                  fontFamily: "Plus Jakarta Sans",
                  paddingLeft: 5,
                  fontWeight: "medium",
                  color: "black",
                }}
              >
                {company.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                borderTop: "1px solid gray",
                marginLeft: 0,
              }}
            >
              <Card
                sx={{
                  display: { xs: "block", md: "flex" },
                  flexDirection: "row",
                  cursor: { xs: "pointer", md: "default" },
                  boxShadow: "none",
                  paddingLeft: 5,
                }}
              >
                <Box
                  sx={{
                    width: { xs: "80px", md: "10%" },
                    height: { xs: "100px", md: "80px" },
                    borderRadius: "50%",
                    marginTop: 2,
                    position: "relative",

                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Image
                    src={company.img}
                    width={100}
                    height={100}
                    alt="companyLogo"
                    style={{ width: "100%", height: "100%", zIndex: 3 }}
                  />
                </Box>
                <CardContent
                  sx={{
                    width: { xs: "100%", md: "80%" },
                    maxWidth: "100%",
                    padding: { xs: 2, md: 2 },
                    marginRight: { xs: 0, md: 10 },
                  }}
                >
                  <Collapse
                    in={index === selected}
                    collapsedSize={0}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 400,
                        color: "black",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                    >
                      {company.description}
                    </Typography>
                  </Collapse>

                  <Typography
                    variant="body2"
                    sx={{
                      display: { xs: "none", md: "block" },
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 400,
                      color: "black",
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    {company.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
