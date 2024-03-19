import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../Contexts/globalContext";
import { isMobile } from "react-device-detect";

import BubbleComponent from "../bubbleComponent";
import Level2Header from "../level2Header";
export default function Layout() {
  const [users, setUsers] = useState(["ankit","yadav"]);
  return (
    <>
      <div className="container">
        <GlobalContext.Provider value={{users,setUsers}}>
          <Header />
          {isMobile?<Level2Header title="Level 2 Header" />:<BubbleComponent />}
          
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
