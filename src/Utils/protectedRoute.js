import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Contexts/userContext";

export default function ProtectedRoute({ children }) {
  const { user, auth } = useContext(UserContext);
  console.log("-===??",auth)
  return <>{auth ? children : <Navigate to="/signin" replace />} </>;
}
