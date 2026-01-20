import Router from "./components/router/index.jsx";
import { useAuthStore } from "./store/auth.store.jsx";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useCartStore } from "./store/cart.store.jsx";
import { useUserStore } from "./store/user.store.jsx";

function App() {
  const verifyCookie = useAuthStore((state) => state.verifyCookie);
  const user = useAuthStore((s) => s.user);
  const isAuthChecked = useAuthStore((s) => s.isAuthUser);
  const hydrateCart = useCartStore((s) => s.hydrateCart);
  
  // ✅ Import setUserInfo to calculate nutrients
  const setUserInfo = useUserStore((s) => s.setUserInfo);

  useEffect(() => {
    verifyCookie();
  }, [verifyCookie]);

useEffect(() => {
  if (user) {
    setUserInfo({
      height: user.height || 170,
      weight: user.weight || 65,
      age: user.age || 36
    });
  }
}, [user, setUserInfo]);


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
