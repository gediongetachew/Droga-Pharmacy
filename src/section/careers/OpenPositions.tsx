"use client";
import {
  List,
  ListItemText,
  ListItemButton,
  Box,
  Button,
  InputBase,
  Typography,
  Paper,
  InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchIcon from "@mui/icons-material/Search";
import SvgIcon from "@mui/material/SvgIcon";
import Drawer from "@mui/material/Drawer";
import { useEffect, useMemo, useState } from "react";

// Updated Job interface to match the provided data structure
interface Job {
  id: string; // Unique identifier for the job
  title: string; // Title of the job
  description: string; // Description of the job
  job_category_id: string; // ID of the job category
  job_type_id: string; // ID of the job type
  active: number; // Status of the job (1 for active, 0 for inactive)
  created_at: string; // Timestamp of when the job was created
  updated_at: string; // Timestamp of when the job was last updated
  type: {
    id: string; // Unique identifier for the job type
    name: string; // Name of the job type
    description: string; // Description of the job type
    active: number; // Status of the job type
    created_at: string; // Timestamp of when the job type was created
    updated_at: string; // Timestamp of when the job type was last updated
  };
  category: {
    id: string; // Unique identifier for the job category
    name: string; // Name of the job category
    description: string; // Description of the job category
    active: number; // Status of the job category
    created_at: string; // Timestamp of when the job category was created
    updated_at: string; // Timestamp of when the job category was last updated
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function OpenPositions() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [positionData, setPositionData] = useState<Job[]>([]); // State to hold job data

  const handleFilterClick = (type: string) => {
    setSelectedType(type);
    setIsFilterOpen(false);
  };

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };

  // Fetch job data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/careers?limit=5`);
        const data = await response.json();
        if (data?.data) {
          setPositionData(data.data); // Set the job data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredPositions = useMemo(() => {
    return selectedType === "all"
      ? positionData
      : positionData.filter(
          (position) =>
            position.type.name.toLowerCase() === selectedType.toLowerCase()
        );
  }, [selectedType, positionData]);

  // Get unique types and their corresponding names
  const filterOptions = [
    "all",
    ...new Set(positionData.map((pos) => pos.type.name)),
  ].map((type) => ({
    type: type,
    name:
      type === "all"
        ? "All Positions"
        : positionData.find((pos) => pos.type.name === type)?.type.name || type,
  }));

  // Filter jobs based on search query
  const filteredJobs = useMemo(() => {
    const searchTerm = searchQuery.toLowerCase().trim();

    if (!searchTerm) return filteredPositions; // Return all jobs if search is empty

    return filteredPositions.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm) // Adjusted to use title and description
    );
  }, [filteredPositions, searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section id="openPositions">
      <Box>
        <Grid container sx={{ color: "#F5F5F5" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              background: "#F5F5F5",
              padding: 4,
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "48px" },
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
                color: "black",
              }}
            >
              We have {positionData.length} open positions now!
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ background: "#F5F5F5" }}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingX: { xs: 2, md: 15 },
              }}
            >
              <Grid
                item
                xs={0}
                md={3.5}
                sx={{ display: { xs: "none", md: "flex", height: "78vh" } }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    background: "white",
                    borderRadius: "24px",
                    paddingY: 4,
                    paddingX: 2,
                    margin: {
                      xs: 1,
                      md: 3,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      paddingLeft: 4,
                      fontSize: { xs: "36px" },
                      fontWeight: 700,
                    }}
                  >
                    Filter{" "}
                    <FiberManualRecordRoundedIcon
                      sx={{ scale: 0.5, marginLeft: 5 }}
                    />
                    <span style={{ fontSize: "14px", color: "#777777" }}>
                      By Postion
                    </span>
                  </Typography>
                  <List
                    sx={{
                      display: { xs: "none", md: "flex" },
                      flexDirection: "column",
                      gap: 2,
                      width: "100%", // Ensure list takes full width
                      paddingX: 0, // Remove default padding
                    }}
                  >
                    {filterOptions.map((option) => (
                      <ListItemButton
                        key={option.type}
                        onClick={() => handleFilterClick(option.type)}
                        sx={{
                          bgcolor:
                            selectedType === option.type
                              ? "#f0f0f0"
                              : "transparent",
                          borderRadius: "8px",
                          paddingX: 4, // Add horizontal padding
                          width: "100%", // Take full width
                          justifyContent: "space-between",
                        }}
                      >
                        <ListItemText
                          primary={option.name}
                          sx={{
                            "& .MuiListItemText-primary": {
                              textAlign: "left",
                              paddingRight: 2, // Add space between text and count
                            },
                          }}
                        />
                        <Typography>
                          {option.type === "all"
                            ? positionData.length
                            : positionData.filter(
                                (pos) => pos.type.name === option.type
                              ).length}
                        </Typography>
                      </ListItemButton>
                    ))}
                  </List>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "8px",
                        md: "16px",
                        padding: 4,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 400,
                        color: "#53648B",
                      },
                    }}
                  >
                    We are always seeking talented people. In case you cannot
                    find your desired position here, please send us your
                    LinkedIn profile and give us your contact information. We
                    will be in touch.{" "}
                  </Typography>
                </Paper>
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: { xs: "100%", md: "93%" },
                    gap: 2,
                    margin: {
                      xs: 1,
                      md: 0,
                    },
                    marginTop: { xs: 0, md: 4 },
                  }}
                >
                  <Paper
                    component="form"
                    onSubmit={(e) => e.preventDefault()}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      background: "white",
                      borderRadius: "24px",
                      width: { xs: "75%", md: "100%" },
                      height: { xs: "80%", md: "100%" },
                      padding: 2,
                      marginLeft: { xs: 0, md: 4 },
                      boxShadow: "none",
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <SearchIcon
                      sx={{
                        scale: { xs: 1, md: 1.5 },
                        color: "#535353",
                      }}
                    />
                    <InputBase
                      fullWidth
                      placeholder="Search for job here"
                      value={searchQuery}
                      onChange={handleSearch}
                      sx={{
                        fontSize: { xs: "10px", md: "24px" },
                        color: "#535353",
                        "& .MuiInputBase-input": {
                          padding: 0,
                        },
                        "&::placeholder": {
                          color: "#535353",
                          opacity: 1,
                        },
                      }}
                    />
                  </Paper>
                  <InputLabel
                    component="label"
                    onClick={() => setIsFilterOpen(true)}
                    sx={{
                      display: { xs: "flex", md: "none" },
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      border: "#535353",
                      width: { xs: "25%", md: "0%" },
                      height: { xs: "80%" },
                      borderRadius: "24px",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    <SvgIcon viewBox="0 0 16 16" sx={{ scale: 0.5 }}>
                      <path
                        d="M4.66602 14V12"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.334 14V10"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.334 4V2"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66602 6V2"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66602 12C4.04476 12 3.73414 12 3.4891 11.8985C3.1624 11.7632 2.90284 11.5036 2.76751 11.1769C2.66602 10.9319 2.66602 10.6213 2.66602 10C2.66602 9.37873 2.66602 9.06813 2.76751 8.82307C2.90284 8.4964 3.1624 8.2368 3.4891 8.10147C3.73414 8 4.04476 8 4.66602 8C5.28727 8 5.5979 8 5.84293 8.10147C6.16963 8.2368 6.4292 8.4964 6.56452 8.82307C6.66602 9.06813 6.66602 9.37873 6.66602 10C6.66602 10.6213 6.66602 10.9319 6.56452 11.1769C6.4292 11.5036 6.16963 11.7632 5.84293 11.8985C5.5979 12 5.28727 12 4.66602 12Z"
                        stroke="black"
                      />
                      <path
                        d="M11.334 8C10.7127 8 10.4021 8 10.1571 7.89853C9.83038 7.7632 9.57078 7.5036 9.43545 7.17693C9.33398 6.93187 9.33398 6.62125 9.33398 6C9.33398 5.37875 9.33398 5.06812 9.43545 4.82309C9.57078 4.49639 9.83038 4.23682 10.1571 4.10149C10.4021 4 10.7127 4 11.334 4C11.9553 4 12.2659 4 12.5109 4.10149C12.8376 4.23682 13.0972 4.49639 13.2325 4.82309C13.334 5.06812 13.334 5.37875 13.334 6C13.334 6.62125 13.334 6.93187 13.2325 7.17693C13.0972 7.5036 12.8376 7.7632 12.5109 7.89853C12.2659 8 11.9553 8 11.334 8Z"
                        stroke="black"
                      />
                    </SvgIcon>
                    <Typography
                      sx={{
                        fontSize: { xs: "10px", md: "12px" },
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 500,
                        color: "black",
                      }}
                    >
                      Filter
                    </Typography>
                  </InputLabel>
                </Box>
                {filteredJobs.map((position, index) => (
                  <Paper
                    elevation={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      margin: {
                        xs: 1,
                        md: 4,
                      },
                      width: { xs: "auto", md: "90%" },
                      borderRadius: "24px",
                      padding: { xs: 2, md: 4 },
                    }}
                    key={index}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "xs:15px", md: "28px" },
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 600,
                        color: "#090808",
                      }}
                    >
                      {position.title}
                    </Typography>
                    <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
                      <Button
                        sx={{
                          fontsize: { xs: "5px", md: "10px" },
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 500,
                          color: "#090808",
                          paddindX: { xs: 4, md: 3 },
                          border: "1px solid #E0E0E0",
                          borderRadius: "29px",
                        }}
                      >
                        {position.type.name}
                      </Button>
                      <Button
                        sx={{
                          fontsize: { xs: "5px", md: "10px" },
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 500,
                          color: "#090808",
                          paddindX: { xs: 4, md: 3 },
                          border: "1px solid #E0E0E0",
                          borderRadius: "29px",
                        }}
                      >
                        {position.category.name}
                      </Button>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "10px", md: "16px" },
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 400,
                        color: "#090808",
                      }}
                    >
                      {position.description}
                    </Typography>
                    <Button
                      component="a"
                      href="/positions"
                      endIcon={
                        <ArrowForwardRoundedIcon
                          sx={{
                            fontSize: { xs: "12px", md: "16px" },
                            color: "#FCEE23",
                          }}
                        />
                      }
                      sx={{
                        fontSize: { xs: "10px", md: "16px" },
                        width: { xs: "120px", md: "160px" },
                        height: { xs: "34px", md: "48px" },
                        background: "#090808",
                        color: "#FCEE23",
                        alignSelf: "flex-end",
                        borderRadius: "29px",
                      }}
                    >
                      See Position
                    </Button>
                  </Paper>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Drawer
          anchor="right"
          open={isFilterOpen}
          onClose={handleFilterClose}
          variant="temporary"
          PaperProps={{
            sx: {
              position: "absolute",
              top: "20%",
              left: "5%",
              transform: "translate(-50%, -50%)",
              width: "400px", // Smaller fixed width
              height: "400px", // Smaller fixed height
              borderRadius: "24px",
              padding: "20px",
              maxWidth: "90%", // Responsive width for mobile
              maxHeight: "50vh", // Responsive height
            },
          }}
          ModalProps={{
            sx: {
              "& .MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Filter by Position
              </Typography>
              <Button onClick={handleFilterClose}>Close</Button>
            </Box>

            <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <ListItemButton
                onClick={() => handleFilterClick("all")}
                sx={{
                  justifyContent: "space-between",
                  width: "100%",
                  paddingX: 2,
                  borderBottom: "1px solid #B4B4B4",
                  borderRadius: "12px",
                  bgcolor: selectedType === "all" ? "#f0f0f0" : "transparent",
                }}
              >
                <ListItemText primary="All Positions" />
              </ListItemButton>
              {["engineering", "IT", "design", "sales", "operations"].map(
                (type) => (
                  <ListItemButton
                    key={type}
                    onClick={() => handleFilterClick(type)}
                    sx={{
                      justifyContent: "space-between",
                      width: "100%",
                      paddingX: 2,
                      borderBottom: "1px solid #B4B4B4",
                      borderRadius: "12px",
                      bgcolor:
                        selectedType === type ? "#f0f0f0" : "transparent",
                    }}
                  >
                    <ListItemText
                      primary={type.charAt(0).toUpperCase() + type.slice(1)}
                    />
                    <Typography>
                      {positionData.filter((pos) => pos.type.name === type).length}
                    </Typography>
                  </ListItemButton>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Box>
    </section>
  );
}