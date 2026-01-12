import { Route } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage.jsx";
import ProductsPage from "../../pages/productsPage/ProductsPage.jsx";
import LoginPage from "../../pages/loginPage/LoginPage.jsx";
import RegisterPage from "../../pages/registerPage/RegisterPage.jsx";
import OrderPage from "../../pages/order/OrderPage.jsx";
import Layout from "./Layout.jsx";
import {  createRoutesFromElements,  createBrowserRouter,} from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="order" element={<OrderPage />} />
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
