import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

    addToCart: (product) =>
    set((state) => {
      const { _id, product_name, product_image, product_price  } = product; // only store essentials

      const existing = state.cart.find((p) => p._id === _id);

      if (existing) {
        // If already in cart, increase quantity
        return {
          cart: state.cart.map((p) =>
            p._id === _id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        // First time adding product
        return {
          cart: [...state.cart, { _id, product_name, product_image, product_price, quantity: 1 }],
        };
      }
    }),


  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== productId),
    })),

  clearCart: () => set({ cart: [] }),
}));
