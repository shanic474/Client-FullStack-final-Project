import Router from "./components/router/index.jsx";
import { useAuthStore } from "./store/auth.store.jsx";
import { useEffect } from "react";


function App() {
 const verifyCookie = useAuthStore((state)=>state.verifyCookie);

  useEffect(() => {
    verifyCookie();
  }, [verifyCookie]);

  return (
      <Router />
  )
}

export default App
