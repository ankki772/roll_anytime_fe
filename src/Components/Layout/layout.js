import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../Contexts/globalContext";
export default function Layout() {
  const [users, setUsers] = useState(["ankit","yadav"]);
  return (
    <>
      <div className="container">
        <GlobalContext.Provider value={{users,setUsers}}>
          <Header />
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
