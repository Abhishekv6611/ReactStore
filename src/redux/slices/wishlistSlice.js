import { createSlice } from "@reduxjs/toolkit";


const WhislistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
           return state.filter(item=>item.id!==action.payload)
        }

    }
})
export const {addToWishlist,removeItem}=WhislistSlice.actions
export default WhislistSlice.reducer;