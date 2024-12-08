"use client";
import { Box, Typography, IconButton, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import RelatedProducts from "@/components/RelatedProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewCard from "@/components/RateSection";

// Type for Attachments
interface Attachments {
  product_thumbnail: string; // URL of the product thumbnail
  product_variations: string[]; // Array of URLs for product variations
}

// Type for Category
interface Category {
  id: string; // Category ID
  name: string; // Category name
}

// Type for the main object
interface Product {
  id: string; // Product ID
  name: string; // Product name
  category_id: string; // ID of the associated category
  description: string; // Product description
  info: string; // Additional information about the product
  is_featured: boolean; // Whether the product is featured
  reviews_count: number; // Number of reviews for the product
  average_rate: number | null; // Average rating of the product (null if no ratings)
  attachments: Attachments; // Attachments related to the product
  category: Category; // Associated category information
}

interface relatedProducts {
  id: string; // Product ID
  name: string; // Product name
  category_id: string; // ID of the associated category
  description: string; // Product description
  info: string; // Additional information about the product
  is_featured: boolean; // Whether the product is featured
  reviews_count: number; // Number of reviews for the product
  average_rate: number | null; // Average rating of the product (null if no ratings)
  attachment: string; // Attachments related to the product
  category: Category; //
}

interface review {
  id: string;
  product_id: string;
  name: string;
  email: string;
  rate: number;
  body: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  return lastSpaceIndex > 0
    ? truncated.slice(0, lastSpaceIndex) + "..."
    : truncated + "...";
};

export default function DetailedProducts() {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [reviews, setReviews] = useState<review[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Access window.location only in the client
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");
    setId(idParam);
  }, []);

  const [relatedProducts, setRelatedPoducts] = useState<
    relatedProducts[] | null
  >(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await fetch(
            `${BASE_URL}/api/products/${id}?reviews`
          );
          const data = await response.json();

          // Check if product and reviews exist
          if (data && data.product) {
            setProduct(data.product);
            setReviews(data.product.reviews); // Set reviews directly from product data
            setRelatedPoducts(data.related);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Box
      sx={{
        background: "#F5F5F5",
        minHeight: "100vh",
        paddingX: { xs: 2, md: 8 },
        paddingY: { xs: 8, md: 20 },
      }}
    >
      <IconButton
        onClick={() => router.back()}
        sx={{
          mb: { xs: 7, md: 10 },
          border: "1px solid #B4B4B4",
          borderRadius: 50,
          width: { xs: "100px", md: "140px" },
          px: 1,
          py: { xs: 1, md: 2 },
          "&:hover": {
            border: "1px solid #BDBDBD",
            bgcolor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <ArrowBackIcon sx={{ color: "black", scale: { xs: 0.8, md: 1.5 } }} />
        <Typography
          sx={{
            ml: 1,
            color: "black",
            fontWeight: 700,
            fontSize: { xs: "15px", md: "22px" },
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          Back
        </Typography>
      </IconButton>

      <Grid
        container
        sx={{
          padding: 0,
          borderRadius: "40px",
          background: "white",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            height: { xs: "auto", md: "85%" },
            display: "flex",
            alignItems: "center",
            paddingY: { xs: 1, md: 2 },
            paddingX: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "90%" },
              height: { xs: "300px", md: "525px", lg: "550px", xl: "410px" },
              borderRadius: "40px",
              overflow: "hidden",
              marginLeft: { xs: 0, md: 3 },
              marginTop: { xs: 0, md: 4 },
            }}
          >
            <Image
              src={product?.attachments?.product_thumbnail || "/medicine1.png"} // Use product image or fallback
              alt="thumbnail"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "space-between",
            height: { xs: "auto", md: "100%" },
            overflow: "auto",
            paddingY: { xs: 1, md: 5 },
            paddingX: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", gap: 4, marginTop: { xs: 2, md: 2 } }}>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  color: "black",
                  fontWeight: 600,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                {product?.name}
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  color: "black",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "regular",
                }}
              >
                Category: {product?.category?.name}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2,
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "regular",
                  fontSize: { xs: "12px", md: "12px", lg: "16px", xl: 15 },
                  width: "90%",
                }}
              >
                {product?.description ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: truncateText(product.description, 550),
                    }}
                  />
                ) : (
                  "No description available."
                )}
              </Typography>

              {/* Material Info Section */}
              <Box sx={{ paddingTop: { xs: 3, md: 5, lg: 2 } }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: { xs: "10px", md: 15 },
                  }}
                >
                  Material Info:
                </Typography>
                <Stack spacing={1} sx={{ color: "text.secondary" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "12px",
                        lg: "14px",
                        xl: 15,
                      },
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    {product?.info}
                  </Typography>
                  {/* Add more product details as needed */}
                </Stack>
              </Box>
            </Stack>

            {/* Thumbnails Section */}
            <Stack
              spacing={3}
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100px",
                alignItems: !product?.attachments.product_variations
                  ? "center"
                  : "space-between",
              }}
            >
              {product?.attachments?.product_variations?.map((thumb, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}

              {!product?.attachments?.product_variations && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/medicine2.jpeg"
                      alt="thumbnail"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/medicine2.jpeg"
                      alt="thumbnail"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/medicine2.jpeg"
                      alt="thumbnail"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              )}
            </Stack>
          </Box>

          {/* Mobile Thumbnails Section */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mt: 3,
              width: "100%",
              overflow: "hidden",
             
             
          
            }}
          >
            <Box
              sx={{
                background:'gray',
                 width:'50%',
                display: "flex",
               justifyContent:'space-between',
              
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                px: 2,
                pb: 2,
              }}
            >
              {product?.attachments?.product_variations?.map((thumb, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    minWidth: "80px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
               {!product?.attachments?.product_variations && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/medicine2.jpeg"
                      alt="thumbnail"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/medicine2.jpeg"
                      alt="thumbnail"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/medicine2.jpeg"
                      alt="thumbnail"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Rate and Review Section */}
      <Box sx={{ mt: 8, mb: 4, paddingLeft: { xs: 2, md: 5 } }}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: "black",
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "40px" },
            overflow: "hidden",
          }}
        >
          Rate and Review
        </Typography>

        {/* Desktop view */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            style={{ padding: "10px" }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard
                  name={review.name}
                  rate={review.rate}
                  email={review.email}
                  body={review.body}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Mobile view */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            style={{ padding: "10px" }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard
                  name={review.name}
                  rate={review.rate}
                  email={review.email}
                  body={review.body}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <RelatedProducts products={relatedProducts || []} />
    </Box>
  );
}
