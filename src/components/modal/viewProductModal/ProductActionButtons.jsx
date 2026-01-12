const ProductActionButtons = () => {
  return (
    <div className="mt-auto space-y-3">
      <button
        className="w-full py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase text-sm font-light tracking-wider hover:bg-amber-500/20 transition-all duration-300"
      >
        Add to Cart
      </button>
      <button
        className="w-full py-3 bg-transparent border border-amber-500/20 text-amber-400/70 uppercase text-sm font-light tracking-wider hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-300"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductActionButtons;

