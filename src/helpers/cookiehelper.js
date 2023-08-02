import Cookies from "js-cookie";

const setCookies = (...restcookies) => {
  console.log("resttt",restcookies)
  restcookies.forEach((cookie) => {
    if (cookie.length == 1) return;
    cookie.length == 2
      ? Cookies.set(cookie[0], cookie[1])
      : Cookies.set(cookie[0], cookie[1], cookie[2]);
  });
};

const getCookies = (...restcookies) => {
  let cookiesObj = {}
  restcookies.forEach((cookie) => {
       cookiesObj[cookie] = Cookies.get(cookie);
  });
  return cookiesObj;
};

const removeCookies = (...restcookies) => {
  restcookies.forEach((cookie) => {
    Cookies.remove(cookie);
  });
};

export { setCookies, getCookies, removeCookies };
