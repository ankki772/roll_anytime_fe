import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = []
const sliceName = 'cart'

const cartSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    addToCart: (state) => {
    //   state.value += 1;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
});


export const fetchData = createAsyncThunk('data/fetchData', async () => {
    // const response = await api.fetchData();
    // return response.data;
  });


export const { addToCArt } = cartSlice.actions;
export default cartSlice.reducer;