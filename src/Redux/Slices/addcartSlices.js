import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductDetails } from '../../Api/Services/products';
import { addProductToCart, removeProductfromCart } from '../../Api/Services/user';
import { addDataTocart } from '../action';

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
        // console.log("action from api", action)
        state.status = 'succeeded';
        state.data = (action.payload.result)
      })
      .addCase(addDataTocart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});





// export const { addToCart } = cartSlice.actions;
export default addcartSlice.reducer;