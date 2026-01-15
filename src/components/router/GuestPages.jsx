import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store.jsx";

function GuestPages() {
  const { user } = useAuthStore();

  return !user ? <Outlet /> : <Navigate to="/home" replace />;
}

export default GuestPages;
