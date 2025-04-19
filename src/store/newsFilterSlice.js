import {createSlice} from '@reduxjs/toolkit';
const initialState={
    newsFilters:[],
    currentNewsFilter:null,
}
const newsFilterSlice=createSlice({
    name:'newsFilter',
    initialState:initialState,
    reducers:{
        setAllNewsFilters:(state,action)=>{
            state.newsFilters=action.payload;
        },
        setCurrentNewsFilter:(state,action)=>{
            state.currentNewsFilter=action.payload;
        }
    }
})
export default newsFilterSlice.reducer;
export const {setAllNewsFilters,setCurrentNewsFilter}=newsFilterSlice.actions;