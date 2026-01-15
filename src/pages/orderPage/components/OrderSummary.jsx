import { Link } from "react-router-dom";
import SectionContainer from "../../../components/shared/SectionContainer";
import SectionHeader from "../../../components/shared/SectionHeader";
import FormButton from "../../../components/shared/FormButton";
import SendOrder from "../../../components/hooks/SendOrder.jsx";
import { useAuthStore } from "../../../store/auth.store.jsx";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {useCartStore} from '../../../store/cart.store.jsx';

const OrderSummary = ({
  orderItems,
  subtotal,
  shippment_address,
  tax,
  total,
  shipping,
}) => {
  const user = useAuthStore((s) => s.user);
  const [items, setItems] = useState(
    orderItems.map((item) => ({
      product_id: item._id,
      quantity: item.quantity,
      price: item.product_price,
    }))
  );
  const navigate = useNavigate();
  const clearCart = useCartStore((s) => s.clearCart);

  return (
    <div className="lg:col-span-1">
      <SectionContainer className="sticky top-32">
        <SectionHeader title="Order Summary" />

        {/* Order Items */}
        <div className="space-y-4 mb-6 pb-6 border-b border-amber-500/20">
          {orderItems.map((item) => (
            <div key={item._id} className="flex gap-3">
              <div className="shrink-0 w-16 h-16 bg-[#1a1a1a] border border-amber-500/20 flex items-center justify-center">
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-light text-amber-400 uppercase truncate">
                  {item.product_name}
                </h3>
                <p className="text-xs text-gray-500 uppercase">
                  Qty: {item.quantity}
                </p>
                <p className="text-sm text-amber-400 mt-1">
                  ${(item.product_price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 mb-6 pb-6 border-b border-amber-500/20">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 uppercase tracking-wide">
              Subtotal
            </span>
            <span className="text-gray-300">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 uppercase tracking-wide">
              shipping
            </span>
            <span className="text-gray-300">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 uppercase tracking-wide">Tax</span>
            <span className="text-gray-300">${tax.toFixed(2)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-amber-500/20">
          <span className="text-lg text-gray-400 uppercase tracking-wide">
            Total
          </span>
          <span className="text-2xl font-light text-amber-400">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Place Order Button */}
        <FormButton
          className="mb-4"
          onClick={() => {
            SendOrder({
              user_id: user._id,
              status: "pending",
              total_price: total,
              shippment_address,
              items,
            });
            toast.success("Order placed successfully!");
            navigate("/home");
            clearCart();
          }}
        >
          Place Order
        </FormButton>

        {/* Back to Cart Link */}
        <Link
          to="/products"
          className="block text-center text-sm text-gray-500 uppercase tracking-wide hover:text-amber-400 transition-colors"
        >
          Continue Shopping
        </Link>
      </SectionContainer>
    </div>
  );
};

export default OrderSummary;
