import {createSlice} from '@reduxjs/toolkit';
const initialState={
    newsFilters:[
        {
            id:1,
            value:'All'
        },
        {
            id: 2,
            value: 'Local News'
        },
        {
            id: 3,
            value: 'Sports'
        },
        {
            id: 4,
            value: 'Weather'
        },
        {
            id: 5,
            value: 'Education'
        },
        {
            id: 6,
            value: 'Politics'
        },
        {
            id: 7,
            value: 'Food and Drinks'
        },
        {
            id: 8,
            value: 'Entertainment'
        },
        {
            id: 9,
            value: 'Technology'
        },
        {
            id: 10,
            value: 'Business and Economics'
        }
    ],
    currentNewsFilter:{
        id:1,
        value:'All'
    },
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