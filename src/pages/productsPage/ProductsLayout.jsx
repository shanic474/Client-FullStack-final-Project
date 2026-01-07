import Navbar from "../../components/Navbar";
import ProductsHero from "./ProductsHero";
import ProductsFilters from "./ProductsFilters";
import ProductsSortBar from "./ProductsSortBar";
import ProductsGrid from "./ProductsGrid";
import Footer from "./Footer";

const ProductsLayout = (products) => {
    console.log("layout products: ", products.products);
    
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white transition-colors duration-500">
      <Navbar />
      <ProductsHero />
      <ProductsFilters />
      <ProductsSortBar />
      <ProductsGrid products={products.products}/>
      <Footer />
    </div>
  );
};

export default ProductsLayout;
