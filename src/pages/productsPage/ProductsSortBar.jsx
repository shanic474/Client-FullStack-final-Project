const ProductsSortBar = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-amber-500/20 pb-6">
        <span className="text-gray-500 text-sm font-light">
          <span className="text-amber-400">0</span> products available
        </span>

        <select className="bg-[#1a1a1a] border border-gray-700 text-gray-400 px-4 py-2 rounded-sm text-sm">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </section>
  );
};

export default ProductsSortBar;
