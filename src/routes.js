import Layout from "./Components/Layout/layout";
import Signup from "./Pages/signup";
import Productdetail from "./Pages/productdetail";
import Home from "./Pages/home";
import SignIn from "./Pages/signin";
import Profile from "./Pages/profile";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"/account",
        element:<Profile/>
      },
      {
        path:"/:product_id",
        element:<Productdetail/>
      }
    ],
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
];
