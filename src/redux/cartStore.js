import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import WhislistSlice from './slices/wishlistSlice';
import CartSlice from './slices/cartSlice'
const cartStore = configureStore({
    reducer:{
      productReducer:productSlice,
      wishlistReducer:WhislistSlice,
      CartReducer:CartSlice,

    }
})

export default cartStore