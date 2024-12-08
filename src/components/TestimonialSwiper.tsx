"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Box, Typography, Avatar, Paper } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Add custom styles
const swiperStyles = `
  .swiper-pagination {
    position: relative;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 3px;
    background: #ccc;
    opacity: 1;
    margin: 0 5px;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    background: #000;
    width: 30px;
  }

  @media (min-width: 768px) {
    .swiper-pagination {
      display: none;
    }
  }
`;

interface TestimonialData {
  company: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  logo: string;
}

const testimonials: TestimonialData[] = [
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/testimonialLogo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/testimonialLogo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/testimonialLogo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/testimonialLogo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/testimonialLogo.svg", // Replace with actual logo path
  },
  // Add more testimonials as needed
];

export default function TestimonialSwiper() {
  return (
    <>
      <style>{swiperStyles}</style>
      <Box
        sx={{
          py: { xs: 8, md: 8 },
          background: "#FBFBFB",
          marginTop:{xs:0, md:0}
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "42px" },
            fontWeight: 600,
            fontFamily: "Plus Jakarta Sans",
            px: { xs: 2, md: 10 },
            color: "black",
          }}
        >
          What people say
        </Typography>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Mobile view: single card with pagination
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Desktop view: 1.75 cards without pagination
            1100: {
              slidesPerView: 1.75,
              spaceBetween: -40,
            },
          }}
          style={{
            padding: "60px 28px 60px",
            overflow: "visible",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: "16px",
                  p: { xs: 3, md: 4 },
                  m: { xs: 0, md: 5 },
                  height: { xs: "300px", md: "400px" , lg:'450px', xl:'500px'},

                  width: { xs: "100%", md: "85%", lg:'85%' },
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.25)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "10px", sm: "13px", md:'15px',lg:'18px', xl:'20px' },
                    fontWeight: "bold",
                    fontFamily: "DM Sans",
                    alignSelf: "flex-end",
                    background: "#EAEAEA",
                    borderRadius: "30px",
                    paddingX: 2,
                    paddingY: 1,
                  }}
                >
                  TESTIMONIALS
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "10px", sm: "20px", md:'30px', lg:'35px', xl:'40px'},
                    fontWeight: 700,
                    fontFamily: "DM Sans",
                    mb: 2,
                  }}
                >
                  {testimonial.company}
                </Typography>

                <Box sx={{ position: "relative", width: "95%" }}>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      mb: { xs: 4, md: 5, lg:8,xl:6 },
                      fontSize: { xs: "10px", sm: "13px", md:'15px', lg:'16px', xl:'20px'},
                      flexGrow: 1,
                      width: "100%",
                      fontFamily: "DM Sans",
                      fontWeight: "regular",
                      px: { xs: 0, md: 0, lg:0, xl:4 }, // Add padding to accommodate the quotes
                    }}
                  >
                    {testimonial.content}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingX: { xs: 0, md:0, lg:2  },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      variant="square"
                      sx={{
                        width: { xs: 40, sm: 50, md:58, lg:60,xl:68},
                        height: { xs: 40, sm: 50, md:58 , lg:60 , xl:65},
                        borderRadius: "18px",
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: { xs: "10px", md: "18px", lg:'20px', xl:'25px'},
                        }}
                      >
                        {testimonial.author.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: { xs: "8px", md: "15px", lg:'18px',xl:'20px' },
                        }}
                      >
                        {testimonial.author.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end", // Align the image to the right
                      width: { xs: "60px", sm: "80px", md: "90px" }, // Responsive width
                      height: { xs: "30px", sm: "50px", md: "40px" }, // Responsive height
                      marginLeft: 2, // Adjust margin as needed
                    }}
                  >
                    <Image
                      src={testimonial.logo}
                      alt="Company logo"
                      width={90} // Keep original width for the image
                      height={40} // Keep original height for the image
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }} // Make image fill the box
                    />
                  </Box>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
