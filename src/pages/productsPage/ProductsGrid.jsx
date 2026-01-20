import ProductCard from "./ProductCard";
import NutritionTracker from "../../components/nutrition/NutritionTracker";

const ProductsGrid = (products) => {
  products = products.products;
  
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Grid - Left side, 3 columns */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 xl:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Nutrition Tracker - Right side, sticky */}
        <div className="lg:col-span-1">
          <NutritionTracker />
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;