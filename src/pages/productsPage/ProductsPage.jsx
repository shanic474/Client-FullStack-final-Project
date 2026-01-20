import ProductsLayout from "./ProductsLayout";
import { FetchData } from "../../components/hooks/FetchData.jsx";
import { useState, useEffect } from "react";
import { usePaginationStore } from "../../store/pagination.store.jsx";

const ProductsPage = () => {
  const { getAllData: getProducts } = FetchData("products");
  const { getAllData: getCategories } = FetchData("categories");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const { currentPage, itemsPerPage, setTotalItems } = usePaginationStore();

  // Fetch products for current page from server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ page: currentPage, limit: itemsPerPage });
        setProducts(data.products || []);         
        setTotalItems(data.total || 0);         
        console.log("Fetched products data:", data.products, "Total items:", data.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [currentPage, itemsPerPage]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <ProductsLayout
      products={products || []}
      categories={categories || []}
    />
  );
};

export default ProductsPage;