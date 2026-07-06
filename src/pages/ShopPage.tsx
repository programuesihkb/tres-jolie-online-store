import Navbar from "../components/Navbar";
import ShoppingProductsBoard from "../components/ShoppingProductsBoard";
import { Box } from "@mui/material";
import CategoriesSidebar from "../components/CategoriesSidebar";
import { useState } from "react";
import Footer from "../components/Footer";

type Category = { slug: string; name: string };


const ShopPage = () => {

  const categories: Category[] = [
    { slug: 'beauty', name: 'Beauty' },
    { slug: 'womens-jewellery', name: 'Women\'s Jewellery' },
    { slug: 'fragrances', name: 'Fragrances' },
    { slug: 'skin-care', name: 'Skin Care' },
    { slug: 'womens-dresses', name: 'Women\'s Dresses' },
    { slug: 'womens-shoes', name: 'Women\'s Shoes' },
    { slug: 'womens-watches', name: 'Women\'s Watches' },
    { slug: 'sunglasses', name: 'Sunglasses' },
    { slug: 'tops', name: 'Tops' },
    { slug: 'womens-bags', name: 'Women\'s Bags' }
  ];

  const [selectedCategory, setSelectedCategory] =   useState<string>('');

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'background.default',
      color: 'text.primary',
      }}>
        
      <Navbar />

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '220px 1fr' },
        minHeight: '100%',
      }}>
        <CategoriesSidebar setSelectedCategory={setSelectedCategory} categorySlugs={categories.map(c => c.slug)} />
        <ShoppingProductsBoard category={selectedCategory} categorySlugs={categories.map(c => c.slug)} />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default ShopPage;