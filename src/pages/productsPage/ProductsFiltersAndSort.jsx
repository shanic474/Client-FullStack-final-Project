import { FetchData } from "../../components/hooks/FetchData.jsx";
import { useProductsStore } from "../../store/products.store.jsx";
import { useSelectionsStore } from "../../store/selections.store.jsx";

const ProductsFiltersAndSort = ({ categories = [] }) => {
  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);
  const selectedCategory = useSelectionsStore(
    (state) => state.selectedCategory,
  );
  const setSelectedCategory = useSelectionsStore(
    (state) => state.setSelectedCategory,
  );

  const { getAllData } = FetchData("products");

  async function loadFilteredProducts(categoryId) {
    try {
      const data = await getAllData({
        filter: JSON.stringify({
          product_category: categoryId,
        }),
        _: Date.now(),
      });

      console.log("Filtered Products:", data.products);

      setProducts(data.products);
      console.log("the products are:", products);
    } catch (error) {
      console.error("Error loading filtered products:", error);
    }
  }

  return (
    <section className="py-6">
      <div className="flex items-center justify-between gap-8 border-b border-amber-500/20 pb-6">
        <div className="flex-1">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => {
                  setSelectedCategory(category._id);
                  loadFilteredProducts(category._id);
                }}
                className={`px-6 py-3 border rounded-sm text-sm uppercase tracking-wider transition-all
    ${
      selectedCategory === category._id
        ? "border-amber-500 text-amber-400 bg-amber-500/10"
        : "border-gray-700 text-gray-400 hover:border-amber-500/40 hover:text-amber-400"
    }
  `}
              >
                {category.category_name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <select className="bg-[#1a1a1a] border border-gray-700 text-gray-400 px-4 py-3 rounded-sm text-sm">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductsFiltersAndSort;
