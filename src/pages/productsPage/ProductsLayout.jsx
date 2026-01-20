import Navbar from "../../components/NAV/Navbar";
import ProductsHero from "./ProductsHero";
import ProductsFiltersAndSort from "./ProductsFiltersAndSort";
import ProductsGrid from "./ProductsGrid";
import Footer from "./Footer";
import UserBMI from "./UserBMI"; 

const ProductsLayout = ({ products, categories }) => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white transition-colors duration-500">
      <Navbar />
      
      <div className="w-[90%] mx-auto">
        <ProductsHero />
        <ProductsFiltersAndSort categories={categories} />
        <UserBMI /> 
        <ProductsGrid products={products} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductsLayout;
