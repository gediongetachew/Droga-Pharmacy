"use client";
import { useEffect, useState } from "react";
import { Box, Container, Paper, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import CustomPagination from "@/components/CustomePagination";
import Products from "@/section/landing/products";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface Category {
  id: string;
  name: string;
}

// Define a fallback image URL
const fallbackImageUrl = "/medicine1.png"; // Replace with your actual fallback image path

// Function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "..."; // Add ellipsis if truncated
  }
  return text;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Import BASE_URL from .env

export default function ProductsCMP() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const productsPerPage = 6;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const fetchProducts = async (categoryId?: string) => {
    try {
      const url = categoryId
        ? `${BASE_URL}/api/products?category_id=${categoryId}`
        : `${BASE_URL}/api/products?featured&limit=6`; // Use BASE_URL here
      const response = await fetch(url);
      const data = await response.json();

      const mappedProducts: Product[] = data.data.map((item: any) => ({
        id: item.id,
        title: item.name,
        description: item.description,
        category: item.category.name,
        imageUrl: item.attachments.product_thumbnail || "",
      }));

      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://pharma.drogaconsulting.com/api/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All" || selectedCategory === null
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category: Category) => {
    if (selectedCategory === category.name && category.name !== "All") {
      setSelectedCategory(null);
      setSelectedCategoryId(null);
      fetchProducts();
    } else {
      setSelectedCategory(category.name);
      setSelectedCategoryId(category.id);
      fetchProducts(category.id);
    }
    setPage(1);
    if (window.innerWidth < 900) {
      setIsFilterOpen(false);
    }
  };
  // const router = useRouter();
  // const handleNavigation = (id: string) => {
  //   router.push({pathname: "/productDetail/", query:{id:id}});
  // };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "#F8F9FB",
        pt: "100px",
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          color="text.primary"
          variant="h4"
          sx={{
            mb: 4,
            mt: { xs: 0, md: 10 },
            fontWeight: "bold",
            px: { xs: 2, md: 48 },
          }}
        >
          {selectedCategory ? selectedCategory : "Featured Products"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 10,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 300 },
              px: { xs: 2, md: 0 },
            }}
          >
            <Paper
              sx={{
                p: 2,
                borderRadius: "5%",
                marginTop: { xs: 0, md: -8 },
                cursor: { xs: "pointer", md: "default" },
              }}
              onClick={() => {
                if (window.innerWidth < 900) {
                  setIsFilterOpen(!isFilterOpen);
                }
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={2}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography
                    color="text.primary"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    Filter
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "black",
                      }}
                    />
                    <Typography color="text.secondary">By Category</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                    transform: isFilterOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <HiOutlineChevronUpDown />
                </Box>
              </Box>

              <Box
                sx={{
                  display: {
                    xs: isFilterOpen ? "block" : "none",
                    md: "block",
                  },
                  mt: 2,
                }}
              >
                <Divider />
                {categories.map((category) => (
                  <Box key={category.id}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="start"
                      sx={{
                        py: 2,
                        cursor: "pointer",
                        bgcolor:
                          selectedCategoryId === category.id
                            ? "grey.100"
                            : "transparent",
                        "&:hover": { bgcolor: "grey.100" },
                      }}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.name}
                      <Box
                        sx={{
                          p: 0.2,
                          border: "1px solid #E0E0E0",
                          borderRadius: "50%",
                        }}
                      >
                        <HiOutlineChevronUpDown />
                      </Box>
                    </Box>
                    {parseInt(category.id) < categories.length - 1 && (
                      <Divider />
                    )}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              flex: 1,
              px: { xs: 2, md: 0 },
              height: '1500px',
           
            }}
          >
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
              gap={5}
            >
              {currentProducts.map((product) => (
                <Link href={`/productDetails?id=${product.id}`} key={product.id}>
                  <Paper
                    sx={{
                      overflow: "hidden",
                      borderRadius: "16px",
                      maxWidth: { xs: "100%", md: "500px" },
                      bgcolor: "white",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Box
                      position="relative"
                      sx={{
                        aspectRatio: "4/3",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          right: 16,
                          bottom: 16,
                          borderRadius: "12px",
                          overflow: "hidden",
                          bgcolor: "#F8F9FB",
                        }}
                      >
                        <Image
                          src={product.imageUrl || fallbackImageUrl} // Use fallback image if imageUrl is empty
                          alt={product.title}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 30,
                          right: 26,
                          bgcolor: "black",
                          color: "white",
                          px: 2,
                          py: 1,
                          borderRadius: "16px",
                          fontSize: "0.875rem",
                          zIndex: 1,
                        }}
                      >
                        {product.category}
                      </Box>
                    </Box>
                    <Box p={3}>
                      <Typography
                        variant="h6"
                        sx={{ mb: 1, fontWeight: "bold" }}
                      >
                        {product.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {truncateText(product.description, 100)}
                      </Typography>
                    </Box>
                  </Paper>
                </Link>
              ))}
            </Box>

            <CustomPagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Container>
      <Products />
    </Box>
  );
}
