import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from './newsSlice'
import citiesReducer from './switchCities'
export const store=configureStore({
    reducer:{
        news:NewsReducer,
        cities:citiesReducer
    }
});