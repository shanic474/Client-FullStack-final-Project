const ProductCard = ({ product }) => {
  return (
    <div className="group bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 relative overflow-hidden flex flex-col w-64 h-[450px]">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40" />

      {/* Image / icon */}
      <div className="flex justify-center items-center h-48 bg-[#1a1a1a]/50 border-b border-amber-500/20">
        <img
          src={product.product_image}
          alt={product.product_name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Text content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl uppercase font-light mb-2">{product.product_name}</h3>
          <p className="text-xs text-gray-500 mb-4 line-clamp-3">{product.product_description}</p>
        </div>

        {/* Price and button */}
        <div>
          <div className="flex justify-between border-b border-amber-500/20 pb-4 mb-4">
            <span className="text-gray-500 text-xs uppercase">Price</span>
            <span className="text-amber-400 text-2xl">${product.product_price}</span>
          </div>
          <button className="w-full py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
