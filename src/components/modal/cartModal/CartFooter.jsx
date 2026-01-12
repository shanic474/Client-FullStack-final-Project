import { Link } from 'react-router-dom';

const CartFooter = ({ total }) => {
  return (
    <div className="border-t border-amber-500/20 p-6 bg-[#1a1a1a]/30">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-amber-500/20">
        <span className="text-sm text-gray-400 uppercase tracking-wide">Total</span>
        <span className="text-3xl font-light text-amber-400">${total.toFixed(2)}</span>
      </div>
      <Link
        to="/order"
        className="block w-full py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase text-sm font-light tracking-wider hover:bg-amber-500/20 transition-all duration-300 text-center"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartFooter;

