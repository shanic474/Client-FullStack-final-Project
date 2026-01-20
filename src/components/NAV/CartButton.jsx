import { useModalStore } from "../../store/modal.store.jsx";
import IconButton from './IconButton';

function CartButton() {
  const openModal = useModalStore((s) => s.openModal);

  return (
    <IconButton onClick={() => openModal(true)} ariaLabel="Open cart">
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4 M7 13L5.4 5 m1.6 8-2.293 2.293c-.63.63-.184 1.707.707 1.707H17 m0 0a2 2 0 100 4 2 2 0 000-4 zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </IconButton>
  );
}

export default CartButton;