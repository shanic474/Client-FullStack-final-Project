import Router from "./components/router/index.jsx";
import { useAuthStore } from "./store/auth.store.jsx";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useCartStore } from "./store/cart.store.jsx";

function App() {
  const verifyCookie = useAuthStore((state) => state.verifyCookie);
  const user = useAuthStore((s) => s.user);
  const hydrateCart = useCartStore((s) => s.hydrateCart);
  const isAuthChecked = useAuthStore((s) => s.isAuthUser);

  useEffect(() => {
    verifyCookie();
  }, [verifyCookie]);

  useEffect(() => {
    hydrateCart(); 
  }, [user, hydrateCart]);


  // Show loading while verifying
  if (isAuthChecked === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Router />
      

    </>
  );
}

export default App;
