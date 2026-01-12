import { Outlet } from "react-router-dom";
import CartModal from "../modal/cartModal/CartModal.jsx";
import ViewProductModal from "../modal/viewProductModal/ViewProductModal.jsx";
import { useModalStore } from "../../store/modal.store.jsx";

function Layout() {
  const modalActive = useModalStore((s) => s.modalActive);
  return (
    <>
      <Outlet />
      <CartModal />
      <ViewProductModal />
    </>
  );
}

export default Layout;
