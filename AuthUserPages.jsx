import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store.jsx";

function AuthUserPages() {
  const { user } = useAuthStore();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default AuthUserPages;
