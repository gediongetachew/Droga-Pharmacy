"use client";
import medicineCards from "@/data/medicineCards";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Pagination from "@mui/material/Pagination";

export default function Medicine() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [page, setPage] = useState(1);
  const [supplyPage, setSupplyPage] = useState(1);
  const [showAllMedicine, setShowAllMedicine] = useState(false);
  const [showAllSupplies, setShowAllSupplies] = useState(false);

  const medicineItems = medicineCards;
  const medicineOnlyItems = medicineItems.filter(
    (item) => item.type === "medicine"
  );
  const supplyOnlyItems = medicineItems.filter(
    (item) => item.type === "supply"
  );
  const itemsPerPage = isSmallScreen ? 1 : 3;
  const totalMedicinePages = Math.ceil(medicineOnlyItems.length / itemsPerPage);
  const totalSupplyPages = Math.ceil(supplyOnlyItems.length / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSupplyPageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSupplyPage(value);
  };

  const getMedicineRows = () => {
    if (isSmallScreen) {
      return [medicineOnlyItems.slice((page - 1) * itemsPerPage, page * itemsPerPage)];
    }
    if (!showAllMedicine) {
      return [medicineOnlyItems.slice(0, itemsPerPage)];
    }
    const rows = [];
    for (let i = 0; i < medicineOnlyItems.length; i += itemsPerPage) {
      rows.push(medicineOnlyItems.slice(i, i + itemsPerPage));
    }
    return rows;
  };

  const getSupplyRows = () => {
    if (isSmallScreen) {
      return [supplyOnlyItems.slice((supplyPage - 1) * itemsPerPage, supplyPage * itemsPerPage)];
    }
    if (!showAllSupplies) {
      return [supplyOnlyItems.slice(0, itemsPerPage)];
    }
    const rows = [];
    for (let i = 0; i < supplyOnlyItems.length; i += itemsPerPage) {
      rows.push(supplyOnlyItems.slice(i, i + itemsPerPage));
    }
    return rows;
  };

  return (
    <Grid container sx={{}}>
      <Grid item xs={12} sx={{}}>
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: { xs: 0, md: 5 },
            background: { xs: "#EBEBEA" },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "white",
              gap: 2,
              paddingY: 2,
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingX: { xs: 2, md: 10 },
                paddingY: { xs: 1, md: 5 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "30px", md: "36px" },
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  color: "black",
                  width: { xs: "10%", md: "20%" },
                  textAlign: "left",
                  marginRight: "auto",
                }}
              >
                Medicines
              </Typography>

              <Button
                onClick={() => setShowAllMedicine(!showAllMedicine)}
                sx={{
                  border: "1px solid #B4B4B4",
                  borderRadius: "100px",
                  background: "white",
                  color: "#000000",
                  width: { xs: "100px", sm: "160px", md: "165px" },
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
                }}
              >
                {showAllMedicine ? "Less" : "See All"}
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              {getMedicineRows().map((row, rowIndex) => (
                <Box
                  key={`medicine-row-${rowIndex}`}
                  sx={{
                    display: "flex",
                    justifyContent: isSmallScreen ? "center" : "space-between",
                    width: "100%",
                 
                    borderRadius: "24px",
                    paddingX: { xs: 2, md: 2, lg:5,xl:10 },
                    paddingY: 2,
                    gap: 2,
                  }}
                >
                  {row.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        width: { xs: "90%", sm: "30%", md:'50%', lg:'30%' },
                        aspectRatio: "1/1",
                        zIndex: 2,
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        height: { xs: "290px", sm: "300px", md: "390px", lg:'400px' },
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: {xs:"65%",sm:'60%', md:"65%", lg:"70%"}, // Image container takes 70% of height
                          width: "100%",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "30%", // Text container takes remaining 30%
                          width: "100%",
                          background: "white",
                          borderBottomLeftRadius: "24px",
                          borderBottomRightRadius: "24px",
                          padding: "10px",
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Plus Jakarta Sans",
                            color: "black",
                            fontWeight: 500,
                            fontSize: { xs: "15px", sm: "15px", md: "18px", lg:'20px' },
                            textAlign: "left",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Plus Jakarta Sans",
                            color: "#737373",
                            fontWeight: 500,
                            fontSize: { xs: "10px", sm: "10px", md: "14px", lg:'16px' },
                            textAlign: "left",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              ))}
              {isSmallScreen &&  (
                <Pagination
                count={totalMedicinePages}
                page={page}
                onChange={handlePageChange}
                color="standard"
                hidePrevButton
                hideNextButton
                sx={{ marginTop: 2 }}
              />
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "white",
              gap: 2,
              paddingY: 2,
              borderBottomLeftRadius: "24px",
              borderBottomRightRadius: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingX: { xs: 2, md: 10 },
                paddingY: { xs: 1, md: 5 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "30px", md: "36px" },
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  color: "black",
                  width: { xs: "10%", md: "20%" },
                  textAlign: "left",
                  marginRight: "auto",
                }}
              >
                Supplies
              </Typography>

              <Button
                onClick={() => setShowAllSupplies(!showAllSupplies)}
                sx={{
                  border: "1px solid #B4B4B4",
                  borderRadius: "100px",
                  background: "white",
                  color: "#000000",
                  width: { xs: "100px", sm: "160px", md: "165px" },
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
                }}
              >
                {showAllSupplies ? "Less" : "See All"}
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              {getSupplyRows().map((row, rowIndex) => (
                <Box
                  key={`supply-row-${rowIndex}`}
                  sx={{
                    display: "flex",
                    justifyContent: isSmallScreen ? "center" : "space-between",
                    width: "100%",
                   
                    borderRadius: "24px",
                    paddingX: { xs: 2, md: 2, lg:5,xl:10 },
                    paddingY: 2,
                    gap: 2,
                  }}
                >
                  {row.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        width: { xs: "90%", sm: "30%", md:'50%', lg:'30%' },
                        aspectRatio: "1/1",
                        zIndex: 2,
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        height: { xs: "290px", sm: "300px", md: "350px", lg:'400px' },
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: {xs:"65%",sm:'60%', md:"65%", lg:"70%"}, // Image container takes 70% of height
                          width: "100%",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "30%", // Text container takes remaining 30%
                          width: "100%",
                          background: "white",
                          borderBottomLeftRadius: "24px",
                          borderBottomRightRadius: "24px",
                          padding: "10px",
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Plus Jakarta Sans",
                            color: "black",
                            fontWeight: 500,
                            fontSize: { xs: "15px", sm: "15px", md: "18px", lg:'20px' },
                            textAlign: "left",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Plus Jakarta Sans",
                            color: "#737373",
                            fontWeight: 500,
                            fontSize: { xs: "10px", sm: "10px", md: "14px", lg:'16px' },
                            textAlign: "left",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              ))}
              {isSmallScreen && (
                <Pagination
                  count={totalSupplyPages}
                  page={supplyPage}
                  onChange={handleSupplyPageChange}
                  color="standard"
                  hidePrevButton
                  hideNextButton
                  sx={{ marginTop: 2 }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
