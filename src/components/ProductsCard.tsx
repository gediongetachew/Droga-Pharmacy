import Image from "next/image";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";

interface Attachments {
  product_thumbnail: string; // URL of the product thumbnail
  product_variations: string[]; // Array of URLs for product variations
}

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

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  return lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) + "..." : truncated + "...";
};

export default function ProductCard(product: relatedProducts) {
  return (
    <Link  href={`/productDetails?id=${product.id}`} key={product.id}>
      <Card
      sx={{
        minWidth: { xs: "280px", sm: "320px", md: "380px" },
        borderRadius: { xs: "12px", sm: "14px", md: "16px" },
        boxShadow: "none",
        bgcolor: "#F8F9FA",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "180px", sm: "220px", md: "250px" },
          borderRadius: { xs: "12px", sm: "14px", md: "16px" },
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "3%",
            left: "4%",
            right: "5%",
            bottom: "5%",
            borderRadius: { xs: "8px", sm: "10px", md: "12px" },
            overflow: "hidden",
          }}
        >
          <Image
            src={`/medicine1.png`}
            alt='related product'
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        {product.category.name && (
          <Typography
            sx={{
              position: "absolute",
              top: "8%",
              right: "8%",
              bgcolor: "black",
              color: "#FCEE23",
              px: { xs: 1.5, sm: 1.75, md: 2 },
              py: { xs: 0.75, sm: 0.875, md: 1 },
              borderRadius: { xs: "12px", sm: "14px", md: "16px" },
              fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.875rem" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              zIndex: 1,
            }}
          >
            {product.category.name}
          </Typography>
        )}
      </Box>

      <CardContent
        sx={{
          p: { xs: 1.5, sm: 1.75, md: 2 },
          "&:last-child": { pb: { xs: 1.5, sm: 1.75, md: 2 } },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontFamily: "Plus Jakarta Sans",
            mb: { xs: 0.75, sm: 1, md: 1.25 },
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
            paddingX: {xs:0, md:2}
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" },
            fontWeight: "regular",
            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
            fontFamily: "Red Hat Display",
            paddingX: {xs:0, md:2}
          }}
        >
          {truncateText(product.description, 250)}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  
  );
}
