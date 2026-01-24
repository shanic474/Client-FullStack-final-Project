import ProductsLayout from "./ProductsLayout";
import { FetchData } from "../../components/hooks/FetchData.jsx";
import { useEffect, useState } from "react";
import { usePaginationStore } from "../../store/pagination.store.jsx";
import { useProductsStore } from "../../store/products.store.jsx";

const ProductsPage = () => {
  const products = useProductsStore((state) => state.products);
  const setProducts = useProductsStore((state) => state.setProducts);

  const { getAllData: getProducts } = FetchData("products");
  const { getAllData: getCategories } = FetchData("categories");

  const [categories, setCategories] = useState([]);

  const { currentPage, itemsPerPage, setTotalItems } = usePaginationStore();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({
          page: currentPage,
          limit: itemsPerPage,
        });

        setProducts(data.products || []);
        setTotalItems(data.total || 0);
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
        const data = await getCategories();
        setCategories(data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ProductsLayout
      products={products}
      categories={categories}
    />
  );
};

export default ProductsPage;
