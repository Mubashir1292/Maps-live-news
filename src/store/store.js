import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from './newsSlice'
import citiesReducer from './switchCities'
import newsFilterSlice from './newsFilterSlice'
export const store=configureStore({
    reducer:{
        news:NewsReducer,
        cities:citiesReducer,
        newsFilter:newsFilterSlice
    }
});