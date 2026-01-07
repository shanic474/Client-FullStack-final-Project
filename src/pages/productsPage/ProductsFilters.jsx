const ProductsFilters = () => {
  return (
    <section className="pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">
          Categories
        </h3>

        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <button
              key={i}
              className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider"
            >
              Category
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsFilters;
