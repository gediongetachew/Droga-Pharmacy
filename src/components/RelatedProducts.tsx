import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductsCard";
// Type for Attachments

// Type for Category
interface Category {
  id: string; // Category ID
  name: string; // Category name
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



interface RelatedProductsProps {
  products: relatedProducts[]; // The array of related products
}
export default function RelatedProducts({ products }: RelatedProductsProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // const products = [
  //   {
  //     id: 1,
  //     image: "/suply1.jpeg",
  //     title: "Lorem ipsum dolor sit amet",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
  //     tag: "Medicine",
  //   },
  //   {
  //     id: 2,
  //     image: "/suply2.jpeg",
  //     title: "Lorem ipsum dolor sit amet",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
  //     tag: "Medicine",
  //   },
  //   {
  //     id: 3,
  //     image: "/suply3.jpeg",
  //     title: "Lorem ipsum dolor sit amet",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
  //     tag: "Medicine",
  //   },
  //   {
  //     id: 4,
  //     image: "/suply1.jpeg",
  //     title: "Lorem ipsum dolor sit amet",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
  //     tag: "Medicine",
  //   },
  // ];

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 4, paddingLeft: { xs: 0, md: 5 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="h5"   sx={{
            fontWeight: 600,
            color: "black",
            fontFamily: "Plus Jakarta Sans",
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "24px",
              lg: "40px",
            },
          }}>
          Related Products
        </Typography>
        <IconButton
          onClick={() => setShowAll(!showAll)}
          sx={{
            mb: { xs: 2, sm: 3, md: 4 },
            border: "1px solid #E0E0E0",
            background: "white",
            borderRadius: { xs: "16px", sm: "20px", md: "24px" },
            px: { xs: 2, sm: 3, md: 5 },
            py: { xs: 1.5, sm: 1.75, md: 3.5 },
            minWidth: { xs: "80px", sm: "100px", md: "120px", lg: "140px" },
            height: { xs: "36px", sm: "40px", md: "48px" },
            "&:hover": {
              border: "1px solid #BDBDBD",
              bgcolor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <Typography 
            sx={{
              ml: { xs: 0.5, sm: 0.75, md: 1 },
              color: "black",
              fontWeight: 500,
              fontFamily: "Plus Jakarta Sans",
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "20px" },
            }}>
            {showAll ? 'Show Less' : 'See All'}
          </Typography>
        </IconButton>
      </Box>

      {/* Desktop View */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          "& .additional-row": {
            marginTop: 3,
          }
        }}
      >
        {/* First row - always visible */}
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        
        {/* Additional row - visible when showAll is true */}
        {showAll && (
          <Box 
            className="additional-row" 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
              gridColumn: "1 / -1"
            }}
          >
            {products.slice(3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Box>
        )}
      </Box>

      {/* Mobile View - Swipeable */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* First row */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              px: 2,
              pb: 2,
            }}
            onScroll={(e) => {
              const element = e.target as HTMLElement;
              const scrollPosition = element.scrollLeft;
              const cardWidth = 280 + 16;
              const newStep = Math.round(scrollPosition / cardWidth);
              setActiveStep(newStep);
            }}
          >
            {products.slice(0, 3).map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </Box>

          {/* Additional row for mobile */}
          {showAll && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
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
              {products.slice(3).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </Box>
          )}
        </Box>

        {/* Pagination Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 2,
          }}
        >
          {(showAll ? products : products.slice(0, 3)).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 24,
                height: 4,
                borderRadius: "2px",
                bgcolor: index === activeStep ? "#333" : "#E0E0E0",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}