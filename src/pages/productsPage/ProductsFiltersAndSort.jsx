const ProductsFiltersAndSort = ({ categories = [] }) => {
  console.log("the categories are: ", categories);

  return (
    <section className="py-6">
      <div className="flex items-center justify-between gap-8 border-b border-amber-500/20 pb-6">
        {/* Categories on the left */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category._id}
                className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300"
              >
                {category.category_name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort dropdown on the right */}
        <div className="flex-shrink-0">
          <select className="bg-[#1a1a1a] border border-gray-700 text-gray-400 px-4 py-3 rounded-sm text-sm hover:border-amber-500/40 transition-all duration-300 cursor-pointer">
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