import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalActive: false,       // is modal open?
  modalType: null,          // 'cart' or 'product'
  // Open modal
  openModal: (type) =>
    set({
      modalActive: true,
      modalType: type,

    }),

  // Close modal
  closeModal: () =>
    set({
      modalActive: false,
      modalType: null,
    }),
}));
