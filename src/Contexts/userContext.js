import { createContext, useEffect, useState } from "react";
import { getCookies } from "../helpers/cookiehelper";
export const UserContext = createContext();

export default function UserProvider({ children }){
  
  let {token='',logged_in=''} = getCookies("token","logged_in")   
  const [auth, setAuth] = useState(token ? true : null);
  const [user, setUser] = useState("ankitttttttttt");

  return (
    <>
      <UserContext.Provider value={{user,setUser,auth,setAuth,logged_in} }>{children}</UserContext.Provider>
    </>
  );
};
