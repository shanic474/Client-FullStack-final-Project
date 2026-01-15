import { useNavigate } from "react-router-dom";
import {useModalStore} from "../../../store/modal.store.jsx";


const CartFooter = ({ total }) => {
  const navigate = useNavigate();
  const closeModal = useModalStore((s) => s.closeModal);
  return (
    <div className="border-t border-amber-500/20 p-6 bg-[#1a1a1a]/30">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-amber-500/20">
        <span className="text-sm text-gray-400 uppercase tracking-wide">Total</span>
        <span className="text-3xl font-light text-amber-400">${total.toFixed(2)}</span>
      </div>
      <button
        className="block w-full py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase text-sm font-light tracking-wider hover:bg-amber-500/20 transition-all duration-300 text-center"
        onClick ={()=> {
          closeModal(),
          navigate("/order")}
        }
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartFooter;

