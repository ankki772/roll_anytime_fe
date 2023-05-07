import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export default function UserProvider({ children }){
  const [user, setUser] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    
  }, [])
  

  return (
    <>
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    </>
  );
};
