import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductDetails } from '../../Api/Services/products';
import { addProductToCart, removeProductfromCart } from '../../Api/Services/user';

const initialState = {
  data:[],
  status:''
}
const sliceName = 'cart'

const cartSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   console.log("action to the cart",action)
    //   const index = state.findIndex(item => item.id === action.payload.id);
    //   if (index !== -1) {
    //     state[index].quantity += 1;
    //   } else {
    //     state.push({ ...action.payload, quantity: 1 });
    //   }
    // },
    // removeFromCart: (state, action) => {
    //   const index = state.findIndex(item => item.id === action.payload);
    //   if (index !== -1) {
    //     state.splice(index, 1);
    //   }
    // },
    // incrementQuantity: (state, action) => {
    //   const index = state.findIndex(item => item.id === action.payload);
    //   if (index !== -1) {
    //     state[index].quantity += 1;
    //   }
    // },
    // decrementQuantity: (state, action) => {
    //   const index = state.findIndex(item => item.id === action.payload);
    //   if (index !== -1) {
    //     state[index].quantity -= 1;
    //     if (state[index].quantity === 0) {
    //       state.splice(index, 1);
    //     }
    //   }
    // },

  },
    extraReducers: (builder) => {
      builder
        .addCase(addDataTocart.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addDataTocart.fulfilled, (state, action) => {
          // console.log("action from api",action)
          state.status = 'succeeded';
          state.data.push(action.payload.result)
        })
        .addCase(addDataTocart.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
    extraReducers: (builder) => {
      builder
        .addCase(removeDatafromCart.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(removeDatafromCart.fulfilled, (state, action) => {
          console.log("action from api",action)
          state.status = 'succeeded';
          state.data.push(action.payload.result)
        })
        .addCase(removeDatafromCart.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
});


export const addDataTocart = createAsyncThunk('data/fetchData', async (data, thunkAPI) => {
  console.log("fetchdatato the cart",data)
  const response = await addProductToCart(data);
  // console.log("first,",response)
  return response;
});
export const removeDatafromCart = createAsyncThunk('data/removeData', async (data, thunkAPI) => {
  console.log("fetchdatato the cart",data)
  const response = await removeProductfromCart(data);
  return response;
});


// export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;