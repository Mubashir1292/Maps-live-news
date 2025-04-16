import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from './newsSlice'
export const store=configureStore({
    reducer:{
        news:NewsReducer
    }
});