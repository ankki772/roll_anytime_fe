import { createSlice } from '@reduxjs/toolkit';
import { removeDatafromCart } from '../action';

const initialState = {
    data: [],
    status: ''
}
const sliceName = 'removecart'

const removecartSlice = createSlice({
    name: sliceName,
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(removeDatafromCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeDatafromCart.fulfilled, (state, action) => {
                console.log("action from api", action)
                state.status = 'succeeded';
                state.data.push(action.payload.result)
            })
            .addCase(removeDatafromCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default removecartSlice.reducer;