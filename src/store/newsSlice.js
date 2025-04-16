import { createSlice } from "@reduxjs/toolkit";
const initialNews={
    allNews:[],
    currentNews:null,
    loading:false,
    error:null
}
const newsSlice=createSlice({
    name:'news',
    initialState:initialNews,
    reducers:{
        setAllNews:(state,action)=>{
            state.allNews=action.payload,
            state.loading=false;
        },
        setCurrentNews:(state,action)=>{
            state.currentNews=action.payload;
        },
        getCurrentNews:(state,action)=>{
            const finding = state.allNews.filter((item)=>item.id===action.payload);
            state.currentNews=finding;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setError:(state,action)=>{
            state.error=action.payload;
        }
    }
})
export const {setAllNews,setCurrentNews,setLoading,setError}=newsSlice.actions;
export default newsSlice.reducer;