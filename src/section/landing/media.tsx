"use client";
import { Box, Typography, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import CallMadeIcon from "@mui/icons-material/CallMade";
import newsAndPodcast from "@/data/nesAndPodcast";
import { styled } from "@mui/material/styles";
import PaginationItem from "@mui/material/PaginationItem";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    margin: "0 4px",
    borderRadius: "50%",
    color: "#000",
    fontSize: "16px",
    minWidth: "32px",
    height: "32px",
  },
  "& .MuiPaginationItem-page": {
    "&.Mui-selected": {
      backgroundColor: "#000",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#000",
      },
    },
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  "& .MuiPaginationItem-previousNext": {
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#000",
    },
    "&.Mui-disabled": {
      backgroundColor: "#f5f5f5",
      color: "#bdbdbd",
    },
  },
  "& .MuiPaginationItem-ellipsis": {
    border: "none",
  },
}));

export default function Media() {
  const [page, setPage] = React.useState(1);
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = windowWidth < 900 ? 2 : 4;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  // Calculate displayed items
  const startIndex = (page - 1) * itemsPerPage;
  const displayedItems = newsAndPodcast.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(newsAndPodcast.length / itemsPerPage);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        background: "white",
        marginTop: 0,
        height:  "150vh",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginX: { xs: 2, md: 10 },
          marginTop: { xs: 2, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "48px" },
            fontWeight: 600,
            fontFamily: "Plus Jakarta Sans",
            color: "black",
          }}
        >
          Media
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "15px", md:'20px' },
            fontWeight: 400,
            fontFamily: "Plus Jakarta Sans",
            color: "#6D6D6D",
            width: {xs:"60%", sm:"50%", md:'40%'},
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Montes habitant enim a
          maecenas mattis phasellus suscipit tellus nisl. Est ac.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-between",
          marginX: { xs: 2, md: 10 },
        }}
      >
        {displayedItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", md: "48%" },
              height: {
                xs: "300px",
                sm:'500px',
                md: item.id === 2 ? "500px" : "450px",
                lg: item.id === 2 ? "600px" : "550px",
                xl: item.id === 2 ? "530px" : "480px",
              },
              position: "relative",
              border: "3px solid",
              borderRadius: "30px",

              background: "white",
              marginTop: {
                xs: 2,
                md: item.id === 3 ? -3 : 2,
              },
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "2%",
                left: "1%",
                width: "98%",
                height: {
                  xs: "56%",
                  sm:'58%',
                  md: item.id === 2 ? "70%" : "65%",
                },
                zIndex: 2,
                borderRadius: "30px",
              }}
            >
              <Image
                src={item.src}
                alt="mediaNews"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "inherit",
                  objectPosition: item.id === 2 ? "50% 35%" : "center middle",
                }}
              />
            </Box>

            <Box
              sx={{
                position:'absolute',
                bottom:0,
                left:0,
                width:'100%',
                height: {
                  xs: "38%",
                  sm:'38%',
                  md: item.id === 2 ? "26%" : "32%",
                },
                zIndex:2,
                paddingX: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "30px" , md:'20px', lg:'24px'},
                  fontWeight: 700,
                  fontFamily: "Red Hat Display",
                  color: "black",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "20px",md:'15px', lg:'20px'},
                  fontWeight: 400,
                  fontFamily: "Red Hat Display",
                  color: "#6D6D6D",
                  marginTop: {xs:1, md:2},
                }}
              >
                {item.description}
              </Typography>
            </Box>

            <CallMadeIcon
              sx={{
                position: "absolute",
                top: {xs:item.id === 2 ? "58%" : "58%",sm:item.id === 2 ? "62%" : "62%", md:item.id === 2 ? "75%" : "70%"},
                right: "3%",
                color: "black",
                scale: { xs: 0.8,sm:1, md: 1.2 },
              }}
            />
          </Box>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "start",
          marginLeft: { xs: 0, md: 10 },
          marginY: {xs:2, md:4},
        }}
      >
        <CustomPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                ...(item.type === "previous" && {
                  marginRight: 2,
                }),
                ...(item.type === "next" && {
                  marginLeft: 2,
                }),
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
