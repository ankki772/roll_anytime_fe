import axios from 'axios';
import Cookies from 'js-cookie';
import { setCookies,getCookies } from '../helpers/cookiehelper';

export const client  = axios.create({
	// Configuration
	// baseURL: 'https://ecommerce-jkod.onrender.com/api/v1/',
	baseURL: 'https://a573-49-36-144-122.ngrok-free.app/api/RA/',

	timeout: 8000,
	headers: {
		Accept: 'application/json',
    	},
});

client.interceptors.request.use(function (config) {
    // Do something before request is sent
    // let token = "ddd"
    let {token} = getCookies("token");
    console.log("------------------------------------------------",token)
    if(config.authorization == true)   config.headers.Authorization =`Bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
client.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("reeeeeeeeeeeeeee",response)
    if(response?.data?.message?.token && response.status==200){
      setCookies(["token",response.data.message.token],["logged_in",true])
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });