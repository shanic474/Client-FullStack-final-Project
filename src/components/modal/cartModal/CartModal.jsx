import { useModalStore } from "../../../store/modal.store.jsx";
import ModalBackdrop from "../shared/ModalBackdrop";
import ModalContainer from "../shared/ModalContainer";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import CartFooter from "./CartFooter";
import { useCartStore } from "../../../store/cart.store.jsx";
import { useEffect } from "react";


const CartModal = () => {
  const cart = useCartStore((s) => s.cart);
  const modalActive = useModalStore((s) => s.modalActive);
  const closeModal = useModalStore((s) => s.closeModal);

  useEffect(() => {
  console.log("Cart updated:", cart);
}, [cart]);

  if (!modalActive) return null;

  // Mock cart items for display (without functionality)
  const cartItems = cart;

  const total = cartItems.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);




  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <ModalBackdrop onClick={closeModal} />
      
      <ModalContainer 
        maxWidth="max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CartHeader onClose={closeModal} />

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cartItems.length > 0 && (
          <CartFooter total={total} />
        )}
      </ModalContainer>
    </div>
  );
};

export default CartModal;

