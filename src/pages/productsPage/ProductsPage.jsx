import ProductsLayout from "./ProductsLayout";
import { FetchData } from "../../components/hooks/FetchData.jsx";
import { useState, useEffect } from "react";

const ProductsPage = () => {
  const { getAllData } = FetchData("products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllData();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

//   useEffect(() => {
//     console.table(products);
    console.log(products);
//   }, [products]);

  return <ProductsLayout products={products} />;
};

export default ProductsPage;
