import Navbar from "../../components/NAV/Navbar.jsx";
import { useCartStore } from "../../store/cart.store.jsx";
import OrderHeader from "./components/OrderHeader";
import ShippingForm from "./components/ShippingForm";
import OrderSummary from "./components/OrderSummary";
import { useState } from "react";

const OrderPage = () => {
  const cart = useCartStore((s) => s.cart);
  const [shippingInfo, setShippingInfo] = useState({
    city: "",
    street: "",
  });

  // Mock cart items if cart is empty
  const orderItems =
    cart.length > 0
      ? cart
      : [
          {
            _id: "69222cbc3ec504e999baa787",
            product_name: "Salmon Fillet",
            product_price: 9.8,
            product_category: "Protein",
            product_description: "Fresh salmon rich in omega-3 fatty acids.",
            product_image:
              "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Omelette-8c3b0c8.jpg",
            quantity: 2,
          },
        ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <OrderHeader />

          <div className="flex flex-col lg:grid-cols-3 gap-8">
            {/* Left Column - Order Details */}
            <div className="lg:col-span-2 space-y-6">
              <ShippingForm
                shippingInfo={shippingInfo}
                setShippingInfo={setShippingInfo}
              />
            </div>

            {/* Right Column - Order Summary */}
            <OrderSummary
              orderItems={orderItems}
              subtotal={subtotal}
              tax={tax}
              total={total}
              shippment_address={shippingInfo ? shippingInfo : null}
              shipping={shipping}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
