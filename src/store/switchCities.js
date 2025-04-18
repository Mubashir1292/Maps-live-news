import {createSlice} from '@reduxjs/toolkit';
const initialState={
    cities:[],
    currentCity:{
            label:'Dubai',
            path:{
                lat:25.2048,
                lng:55.2708
            },
    },
}
const switchingCities=createSlice({
    name:'cities',
    initialState:initialState,
    reducers:{
        setAllCities:(state,action)=>{
            state.cities=action.payload;
        },
        setCurrentCity:(state,action)=>{
            state.currentCity=action.payload;
        },
        getCurrentCity:(state,action)=>{
            const city=state.cities.find((s)=>s.id===action.payload);
            state.currentCity=city;
            return state.currentCity;
        }
    }
})
export default switchingCities.reducer;
export const {setAllCities,getCurrentCity,setCurrentCity}=switchingCities.actions;