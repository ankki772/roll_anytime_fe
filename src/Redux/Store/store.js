import { configureStore } from '@reduxjs/toolkit';
import addcartReducer from '../Slices/addcartSlices'
import removecartReducer from '../Slices/removeCartSlices'

const store = configureStore({
  reducer: {
    addcart: addcartReducer,
    removecart: removecartReducer,
    
  },
});

export default store;