import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet, useLocation } from "react-router-dom";
import { GlobalContext } from "../../Contexts/globalContext";
import { isMobile } from "react-device-detect";

import BubbleComponent from "../bubbleComponent";
import Level2Header from "../level2Header";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../../Redux/action";
import { getCookies } from "../../helpers/cookiehelper";
export default function Layout() {
  const [users, setUsers] = useState(["ankit","yadav"]);
  let dispatch = useDispatch();
  const location = useLocation();
  let { logged_in } = getCookies("logged_in");


  useEffect(() => {
    if (logged_in == 'true') {
      dispatch(fetchCartData())      
    }
  }, []);
  return (
    <>
      <div className="container">
        <GlobalContext.Provider value={{users,setUsers}}>
          <Header />
          {location.pathname != '/cart'? 
          isMobile?<Level2Header title="Level 2 Header" />:<BubbleComponent />
          :null}
          
          <Outlet />
        <Footer />
        </GlobalContext.Provider>
      </div>
      <style jsx="true">
        {`
          .container {
            height: 100vh;
            overflow: auto;
          }
        `}
      </style>
    </>
  );
}
