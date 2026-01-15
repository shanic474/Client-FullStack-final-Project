import { useCartStore } from "../../../store/cart.store.jsx";

const CartItem = ({ item }) => {
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

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
        </div>

        {/* Quantity + Price */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-500/10">
          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item._id)}
              className="w-8 h-8 flex items-center justify-center border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition"
            >
              −
            </button>

            <span className="text-sm text-gray-300 w-6 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQty(item._id)}
              className="w-8 h-8 flex items-center justify-center border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition"
            >
              +
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase">Total</p>
            <p className="text-xl text-amber-400">
              ${(item.product_price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item._id)}
        className="self-start text-gray-500 hover:text-red-400 transition"
        title="Remove item"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
