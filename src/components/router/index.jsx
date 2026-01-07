import { Route } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage.jsx";
import ProductsPage from "../../pages/productsPage/ProductsPage.jsx";
import Layout from "./Layout.jsx";
import {  createRoutesFromElements,  createBrowserRouter,} from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
