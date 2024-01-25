import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductToCart, removeProductfromCart } from "../Api/Services/user";

export const addDataTocart = createAsyncThunk('data/fetchData', async (data, thunkAPI) => {
    // console.log("fetchdatato the cart",data)
    const response = await addProductToCart(data);
    // console.log("action response aaddd",response)
    return response;
  });
  export const removeDatafromCart = createAsyncThunk('data/removeData', async (data, thunkAPI) => {
    // console.log("removedata from the cart",data)
    const response = await removeProductfromCart(data);
    return response;
  });