import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const store = configureStore({       // creating redux store
 reducer : {
     cart : cartReducer ,
 },        
});

export default store;