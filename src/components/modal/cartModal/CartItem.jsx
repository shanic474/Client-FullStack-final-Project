const CartItem = ({ item }) => {
  return (
    <div className="flex gap-4 p-4 bg-[#1a1a1a]/50 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
      {/* Product Image */}
      <div className="flex-shrink-0 w-24 h-24 bg-[#1a1a1a] border border-amber-500/20 flex items-center justify-center">
        <img
          src={item.product_image}
          alt={item.product_name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-light text-amber-400 uppercase mb-1">
            {item.product_name}
          </h3>
          <p className="text-xs text-gray-500 mb-2 line-clamp-1">
            {item.product_description}
          </p>
          <p className="text-xs text-gray-600 uppercase">
            {item.product_category}
          </p>
        </div>

        {/* Quantity and Price */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-500/10">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 uppercase">Qty:</span>
            <span className="text-sm text-gray-300">{item.quantity}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase">Price</p>
            <p className="text-xl text-amber-400">
              ${(item.product_price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

