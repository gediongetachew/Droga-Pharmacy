import { Box, Typography } from "@mui/material";
import valuesData from "@/data/valuesData";
const Values = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 4,
        padding: { xs: 1, md: 8 },
        background: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          background: "white",

          paddingX: { xs: 0, md: 5 },
          paddingY: { xs: 0, md: 0 },
          borderRadius: "44px",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            paddingY: { xs: 3, md: 5 },
            paddingX: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "48px" },
              width: { xs: "100%", md: "45%" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              color: "black",
            }}
          >
            What make Droga a great place to work?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "20px" },
              width: { xs: "100%", md: "45%" },
              marginLeft: { xs: 0, md: 30 },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              color: "#777777",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim sed diam
            eros hac risus pharetra quis. Eu sollicitudin ut quis a. Viverra
            fusce sem amet feugiat nibh pellentesque scelerisque scelerisque.
            Sed aliquam id faucibus integer pellentesque elementum risus ornare.
          </Typography>
        </Box>

        {valuesData.map((value, index) => (
          <Box
          key={index}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              gap: index % 2 === 0 ? 5 : 5,
              width: "100%",
             height:'60%',
              padding: { xs: 1, md: 2 },
            
            }}
          >
            {/* Text Content */}
            <Box
              sx={{
                flex: "0 0 43%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 5 },
                padding: { md: 2 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "15px", md: "32px" },
                  fontWeight: 600,
                  fontFamily: "Plus Jakarta Sans",
                  color: "#090808",
                }}
              >
                {value.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "16px" },
                  fontFamily: "Plus Jakarta Sans",
                  color: "#4F4F4F",
                  lineHeight: 1.6,
                }}
              >
                {value.text}
              </Typography>
            </Box>

            {/* Image */}
            <Box
              sx={{
                flex: "0 0 55%",
                padding: { md: 2 },
                "& img": {
                  width: "100%",
                  height: { xs: "35%", sm:'20%', md: "60%", lg:'60%' },
                  objectFit: "cover",
                  borderRadius: "24px",
                },
                display: { xs: "block", md: "block" },
              }}
            >
              <img src={value.img} alt={`${value.value} illustration`} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Values;
