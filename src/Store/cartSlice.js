import { createSlice } from '@reduxjs/toolkit';  // importing createSlice api from redux toolkit

    

//creating a slice

const cartSlice = createSlice({    
    name : 'cart',      // name to identify the slice
    initialState : [],        // initial state value
    reducers : {       // where u write function to update states
        add(state ,action){
            // redux
            // return  [...state , action.payload]
            state.push(action.payload);
        },
        remove (state , action){
            return state.filter((item) => item.id !== action.payload)
        },
    },
})

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;