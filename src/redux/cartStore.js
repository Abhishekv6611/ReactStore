import {configureStore} from '@reduxjs/toolkit';

const cartStore = configureStore({
    reducer:{
        // productReducer:productSlice
    }
})

export default cartStore