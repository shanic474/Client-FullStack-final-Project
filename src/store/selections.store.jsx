import { create } from "zustand";

export const useSelectionsStore = create((set) => ({
  selectedProduct: null,

  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
}));
