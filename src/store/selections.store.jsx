import { create } from "zustand";

export const useSelectionsStore = create((set) => ({
  selectedProduct: null,
  selectedCategory: null,

  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  clearSelectedCategory: () => set({ selectedCategory: null }),
}));
