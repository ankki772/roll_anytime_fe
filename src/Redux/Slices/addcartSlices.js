import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductDetails } from '../../Api/Services/products';
import { addProductToCart, removeProductfromCart } from '../../Api/Services/user';
import { addDataTocart, fetchCartData } from '../action';

const initialState = {
  data: [],
  status: ''
}
const sliceName = 'addcart'

const addcartSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDataTocart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addDataTocart.fulfilled, (state, action) => {
        console.log("action from api", action)
        state.status = 'succeeded';
        state.data = (action.payload.result.cart_items)
      })
      .addCase(addDataTocart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCartData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        // console.log("action from api", action)
        state.status = 'succeeded';
        state.data = (action.payload)
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectUsers = (state) => state.data;

// export const { addToCart } = cartSlice.actions;
export default addcartSlice.reducer;