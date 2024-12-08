import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import product from "../../../public/product.png";
import product2 from "../../../public/product2.png";
export default function Products() {
  return (
    <Grid
      container
      sx={{
        background: "white",
        height: "500px",
        display: { xs: "none", md: "block" }, // Hide on xs and sm screens, show from md up
      }}
    >
      <Grid
        item
        md={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "44%",
            height: "44vh",
            background: "#FCEE23",
            borderTopRightRadius: "24px",
            borderBottomRightRadius: "24px",
            marginY: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "50%",
              padding: 5,
              alignItems: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "10px", lg: "14px" },
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                color: "black",
              }}
            >
              Pharmacy Essentials
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: { xs: "10px", md: "24px" },
                 
                },
                fontWeight: 800,
                fontFamily: "Plus Jakarta Sans",
                width: { md: "100%", lg: "80%" },
                color: "black",
              }}
            >
              Your Health, Just a Click Away
            </Typography>
            <Typography
              sx={{
                fontSize: {md: "15px",lg:'16px'},
                fontWeight: 500,
                fontFamily: "Plus Jakarta Sans",
                color: "#2B2B2B",
                width: {md:"100%", lg:"95%"},
              }}
            >
              Convenient, reliable access to all your pharmacy needs, delivered
              right to your door.
            </Typography>
            <Button
              sx={{
                width: { md: "150px" , lg:'180px', xl:'245px'},
                fontSize: { md: "10px", lg:'12px', xl:'16px' },
                fontWeight: 600,
                color: "#FCEE23",
                paddingx: { md: 0, lg:1 },
                paddingY: { md: 2 },
                borderRadius: { md: "100px" },
                background: "black",
                marginTop: {md:0 , lg:2},
              }}
            >
              View More Products
            </Button>
          </Box>

          <Image
            src={product}
            alt="product"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              marginTop: "-30%",
              marginBottom: "-20%",
              marginRight: "-10%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "45%",
            height: "45vh",
            background: "black",
            borderTopLeftRadius: "24px",
            borderBottomLeftRadius: "24px",
            marginY: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "80%",
              padding: 10,
              alignItems: "lft",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "10px", lg:'14px'},
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                color: "white",
              }}
            >
              Pharmacy Essentials
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: "15px", lg:'24px'
                },
                fontWeight: 800,
                fontFamily: "Plus Jakarta Sans",
                width: "100%",
                color: "#FCEE23",
              }}
            >
              Your Health, Just a Click Away
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: "15px",
                },
                fontWeight: 500,
                fontFamily: "Plus Jakarta Sans",
                color: "white",
                width: "100%",
              }}
            >
              Convenient, reliable access to all your pharmacy needs, delivered
              right to your door.
            </Typography>
          </Box>

          <Image
            src={product2}
            alt="product"
            priority
            style={{
              width: "40%",
              height: "100%",

              position: "relative",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
