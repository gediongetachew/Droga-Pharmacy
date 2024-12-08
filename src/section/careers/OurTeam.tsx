import { Box, Grid } from "@mui/material";

const OurTeam = () => {
  return (
    <Grid 
      container 
      spacing={{ xs: 1, sm: 2 }} 
      sx={{
        background: 'black', 
        padding: { xs: 2, sm: 4, md: 10 }
      }}
    >
      {/* Left side - 3 images */}
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: 1, sm: 2 } 
        }}
      >
        {/* Top full-width image */}
        <Box sx={{ 
          height: { 
            xs: "250px", 
            sm: "300px", 
            md: "400px" 
          }, 
          width: "100%" 
        }}>
          <img
            src="/team1.png"
            alt="Team member"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        {/* Bottom two images container */}
        <Box sx={{ 
          display: "flex", 
          gap: { xs: 1, sm: 2 }, 
          height: { 
            xs: "150px", 
            sm: "200px", 
            md: "250px" 
          } 
        }}>
          <Box sx={{ width: "50%" }}>
            <img
              src="/team2.png"
              alt="Team member"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <img
              src="/team3.png"
              alt="Team member"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Grid>

      {/* Right side - 4 images in 2 columns */}
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          display: "flex", 
          gap: { xs: 1, sm: 2 },
          mt: { xs: 1, sm: 2, md: 0 } // Add margin top on mobile
        }}
      >
        {/* First column */}
        <Box sx={{ 
          width: "50%", 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: 1, sm: 2 } 
        }}>
          <Box sx={{ 
            height: { 
              xs: "150px", 
              sm: "200px", 
              md: "250px" 
            } 
          }}>
            <img
              src="/team4.png"
              alt="Team member"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ 
            height: { 
              xs: "250px", 
              sm: "300px", 
              md: "400px" 
            } 
          }}>
            <img
              src="/team5.png"
              alt="Team member"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        {/* Second column */}
        <Box sx={{ 
          width: "50%", 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: 1, sm: 2 } 
        }}>
          <Box sx={{ 
            height: { 
              xs: "250px", 
              sm: "300px", 
              md: "400px" 
            } 
          }}>
            <img
              src="/team6.png"
              alt="Team member"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ 
            height: { 
              xs: "150px", 
              sm: "200px", 
              md: "250px" 
            } 
          }}>
            <img
              src="/team7.png"
              alt="Team member"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OurTeam;
