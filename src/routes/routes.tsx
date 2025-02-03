import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import ProductListAll from "../components/HomePage/ProductListAll";
import AboutUs from "../pages/AboutUs";
import BlogListAll from "../pages/BlogListAll";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import SignUp from "../pages/SignUp";
import VerifyOrder from "../pages/VerifyOrder";
import ProtectedRoute from "../utils/ProtectedRoute";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths, userPaths } from "./user.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/products",
    element: <ProductListAll />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
  {
    path: "/blogs",
    element: <BlogListAll />,
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute role="user">
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute role="user">
        <Checkout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/order/verify",
    element: (
      <ProtectedRoute role="user">
        <VerifyOrder />
      </ProtectedRoute>
    ),
  },

  //User Dashboard Panel Routes
  {
    path: "/user",
    element: (
      <ProtectedRoute role={"user"}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
  //Admin Dashboard Panel Routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute role={"admin"}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
]);
export default router;
