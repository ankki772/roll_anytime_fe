import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slices/cartSlices'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    
  },
});

export default store;