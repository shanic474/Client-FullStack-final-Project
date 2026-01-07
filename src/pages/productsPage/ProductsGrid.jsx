import ProductCard from "./ProductCard";

const ProductsGrid = (products) => {
    products=products.products
    
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        
      </div>
    </section>
  );
};

export default ProductsGrid;
