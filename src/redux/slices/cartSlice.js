import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        incrementQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

            } 
        },
        removeCartItem:(state,action)=>{
       return state.filter(item=>item.id!=action.payload)
        },
        decrementQuality:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            if(existingProduct){
                existingProduct.quantity--
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]

            } 
        },
        emptyCart:(state)=>{
            return state=[]
        }
        
    }
})
export const {addToCart,incrementQuantity,removeCartItem,decrementQuality,emptyCart}=CartSlice.actions
export default CartSlice.reducer