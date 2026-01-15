import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthStore } from "./auth.store.jsx";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      hydrated: false, 

      addToCart: (product) => {
        const { _id, product_name, product_image, product_price } = product;
        const existing = get().cart.find((p) => p._id === _id);

        if (existing) {
          set({
            cart: get().cart.map((p) =>
              p._id === _id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          });
        } else {
          set({
            cart: [
              ...get().cart,
              { _id, product_name, product_image, product_price, quantity: 1 },
            ],
          });
        }
      },

      increaseQty: (id) =>
        set({
          cart: get().cart.map((p) =>
            p._id === id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        }),

      decreaseQty: (id) =>
        set({
          cart: get()
            .cart.map((p) =>
              p._id === id ? { ...p, quantity: p.quantity - 1 } : p
            )
            .filter((item) => item.quantity > 0),
        }),

      removeFromCart: (id) =>
        set({ cart: get().cart.filter((p) => p._id !== id) }),

      clearCart: () => set({ cart: [] }),

      
      hydrateCart: () => {
        const user = useAuthStore.getState().user;
        if (!user) {
          set({ cart: [], hydrated: true });
        } else {
          set({ hydrated: true }); 
        }
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage, 
    }
  )
);
