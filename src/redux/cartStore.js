import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import WhislistSlice from './slices/wishlistSlice';
const cartStore = configureStore({
    reducer:{
      productReducer:productSlice,
      wishlistReducer:WhislistSlice,
    }
})

export default cartStore