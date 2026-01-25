import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "../../pages/homePage/HomePage.jsx";
import ProductsPage from "../../pages/productsPage/ProductsPage.jsx";
import LoginPage from "../../pages/loginPage/LoginPage.jsx";
import RegisterPage from "../../pages/registerPage/RegisterPage.jsx";
import OrderPage from "../../pages/orderPage/OrderPage.jsx";
import AuthUserPages from "./AuthUserPages.jsx";
import GuestPages from "./GuestPages.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Public pages */}
      <Route index element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />

      {/* Guest-only pages */}
      <Route element={<GuestPages />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Auth-only pages */}
      <Route element={<AuthUserPages />}>
        <Route path="order" element={<OrderPage />} />
      </Route>
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
