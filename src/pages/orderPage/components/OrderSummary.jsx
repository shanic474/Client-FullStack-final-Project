import { Link } from 'react-router-dom';
import SectionContainer from '../../../components/shared/SectionContainer';
import SectionHeader from '../../../components/shared/SectionHeader';
import FormButton from '../../../components/shared/FormButton';

const OrderSummary = ({ orderItems, subtotal, shipping, tax, total }) => {
  return (
    <div className="lg:col-span-1">
      <SectionContainer className="sticky top-32">
        <SectionHeader title="Order Summary" />

        {/* Order Items */}
        <div className="space-y-4 mb-6 pb-6 border-b border-amber-500/20">
          {orderItems.map((item) => (
            <div key={item._id} className="flex gap-3">
              <div className="flex-shrink-0 w-16 h-16 bg-[#1a1a1a] border border-amber-500/20 flex items-center justify-center">
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
            <span className="text-gray-400 uppercase tracking-wide">Subtotal</span>
            <span className="text-gray-300">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 uppercase tracking-wide">Shipping</span>
            <span className="text-gray-300">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 uppercase tracking-wide">Tax</span>
            <span className="text-gray-300">${tax.toFixed(2)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-amber-500/20">
          <span className="text-lg text-gray-400 uppercase tracking-wide">Total</span>
          <span className="text-2xl font-light text-amber-400">${total.toFixed(2)}</span>
        </div>

        {/* Place Order Button */}
        <FormButton className="mb-4">Place Order</FormButton>

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

