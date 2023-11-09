import Layout from "./Components/Layout/layout";
import Signup from "./Pages/signup";
import Productdetail from "./Pages/productdetail";
import Categories from "./Pages/categories";
import Home from "./Pages/home";
import SignIn from "./Pages/signin";
import Profile from "./Pages/profile";
import ProductListing from "./Pages/productListing";
import  MproductListing from "./Pages/mproductListing";
import Admin from "./Pages/admin";
import ProtectedRoute from "./Utils/protectedRoute";
import { ProductCart } from "./Components/productCart";
import { isMobile,isTablet } from "react-device-detect";
import Cart from "./Pages/cart";
export const routes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"/account",
        // element:<ProtectedRoute><Profile/></ProtectedRoute>
        element:<Profile/>
      },
      {
        path:"categories/:category_name/",
        element:<Categories/>
      },
      {
        path:"product/:product_id",
        element:<Productdetail/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"listing",
        element: (isMobile && !isTablet)?  <MproductListing/> : <ProductListing/>
      },
      {
        path:"user/productcart",
        element : <ProtectedRoute><ProductCart/></ProtectedRoute>
      }
    ],
  },
  {
    path: "/login",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path:"/admin",
    element:   <Admin/>
  }
];
