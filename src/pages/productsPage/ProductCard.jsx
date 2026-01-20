import { useCartStore } from "../../store/cart.store.jsx";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className="group bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700 relative overflow-hidden">
      {/* Corner accents - all four corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
      
      {/* Large centered image/icon */}
      <div className="text-8xl mb-8 text-center text-amber-400/20">
        <img
          src={product.product_image}
          alt={product.product_name}
          className="w-full h-32 object-contain opacity-20"
        />
      </div>

      {/* Header with title and badge */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b border-amber-500/20">
        <h3 className="text-2xl font-light text-white tracking-wide uppercase">
          {product.product_name}
        </h3>
        <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-light px-3 py-1.5 rounded-sm uppercase tracking-wide">
          Premium
        </span>
      </div>
      
      {/* Nutrition data grid */}
      <div className="grid grid-cols-2 gap-3 mb-8 p-5 bg-black/50 border border-gray-800 rounded-sm">
        <div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">
            Calories
          </div>
          <div className="text-xl font-light text-white">
            {product.calories || 'N/A'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">
            Protein
          </div>
          <div className="text-xl font-light text-amber-400">
            {product.protein ? `${product.protein}g` : 'N/A'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">
            Carbs
          </div>
          <div className="text-xl font-light text-amber-400">
            {product.carbs ? `${product.carbs}g` : 'N/A'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">
            Fat
          </div>
          <div className="text-xl font-light text-amber-400">
            {product.fat ? `${product.fat}g` : 'N/A'}
          </div>
        </div>
      </div>
      
      {/* Price section */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-amber-500/20">
        <span className="text-gray-500 text-xs font-light uppercase tracking-wide">
          Investment
        </span>
        <span className="text-2xl font-light text-amber-400">
          ${product.product_price}
        </span>
      </div>
      
      {/* Add to cart button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full py-4 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/50 transition-all duration-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;