import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import aboutImage from "../../../public/aboutus.png";
import logo2 from "../../../public/logo2.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: {xs:'column', md:'row'},
        justifyContent: "space-between",
        paddingX: { xs: "5%" },
        background: "#F5F5F5",
        
       
      }}
    >
      <Box sx={{
        display:'flex', 
        flexDirection:{xs:'column', md:'row'},
        marginTop:20,
        marginBottom:10,
        marginX:0,
        padding:5, 
        justifyContent: "space-between", 
        background:'white',
        borderRadius:'24px'
      }}>
         <Grid
        item
        xs={12}
        md={6}
        lg={5}
        sx={{ justifyContent: "center", alignItems: "center", paddingBottom:{xs:0, sm:0, md:15, lg:0}}}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "55vh", md: "90vh", xl:'80vh' },
            borderRadius: "30px",
            zindex: 1,
            boxShadow: "2px 2px 2px rgba(0.3, 0.3, 0.3, 0.3)",
            overflow: "hidden",
          }}
        >
          <Image
            src={aboutImage}
            alt="about us"
            fill
            style={{ objectFit: "cover" }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "0%",
              right: "0%",
              width: { xs: "40%", sm: "30%", md: "40%", lg:'40%' },
              height: { xs: "10%", sm: "12%", md: "8%", lg:'8%', xl:'10%' },
              zIndex: 2,
              background: "white",
              borderBottomLeftRadius: "20px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Image
              src={logo2}
              alt="about us"
              width={100}
              height={80}
              style={{
                width: "auto",
                height: "100%",
                padding: "8px",
                objectFit: "contain",
                borderBottomLeftRadius: "20px",
                objectPosition: "center top",
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          gap: { xs: 4, },
         
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "48px" },
            width: "100%",
            fontWeight: 600,
            color: "#000000",
            fontFamily: "Plus Jakarta Sans",
            textWrap: "nowrap",
          }}
        >
          Mother Company
        </Typography>

        <Typography
          sx={{
            width: "100%",

            color: "#737373",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 400,

            fontSize: { xs: "12px", sm: "18px", md: "24px" },
          }}
        >
          Droga Pharma Pvt. Ltd. Co., based in Addis Ababa, Ethiopia, is
          committed to delivering a sustainable and reliable supply of
          high-quality medical products. Specializing in medicines, sutures,
          orthopedic implants, disposable devices, and diagnostic equipment, the
          company ensures that healthcare providers have access to essential
          products at competitive prices. With a focus on both quality and
          affordability, Droga Pharma contributes significantly to improving
          healthcare standards in the region.
        </Typography>
        

        <Button
          component="a"
          href="/aboutUs"
          sx={{
            borderRadius: "100px",
            width: {
              xs: "200px",
              md: "213px"},
              paddingX: { xs: 1, md: 2 },
              paddingY: { xs: 2, md: 3 },
              fontFamily: "Plus Jakarta Sans",
              fontWeight:'bold',
              color: "#FCEE23",
              background: "black",
              fontSize: {xs:'18px',sm:'20px', md:'24px'}
          }}
        >
          Read More
        </Button>
      </Grid>
      </Box>
         
    </Grid>
  );
}
