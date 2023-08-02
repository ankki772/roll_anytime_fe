import React from "react";
import { isExpired, decodeToken } from "react-jwt";

export const decryptToken = (token='') => {
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);

  return myDecodedToken
};