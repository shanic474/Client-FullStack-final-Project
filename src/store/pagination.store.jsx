import { create } from "zustand";

export const usePaginationStore = create((set) => ({
  currentPage: 1,
  itemsPerPage: 4, // set this according to your server/page size
  totalItems: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalItems: (count) => set({ totalItems: count }),
}));
