import React from 'react'
import { useDispatch } from 'react-redux';
import {setCurrentCity,setAllCities} from '../store/switchCities';
function CitiesNavigation() {
    const dispatcher=useDispatch();
    const cities=[
        {
            label:'Dubai',
            path:{
                lat:25.2048,
                lng:55.2708
            },
            zoomed:false,
        },
        {
            label:'Abu Dhabi',
            path:{
                lat:24.4539,
                lng:54.3773
            },
            zoomed:false,
        },
        {
            label:'Sharjah',
            path:{
                lat:25.3562,
                lng:55.4272
            },
            zoomed:false,
        },
        {
            label:'Ajman',
            path:{
                lat:25.4052,
                lng:55.5136
            },
            zoomed:false,
        },
        {
            label:'Umm Al Quwain',
            path:{
                lat:25.5508,
                lng:55.5524
            },
            zoomed:false,
        },
        {
            label:'Ras Al Khaimah',
            path:{
                lat:25.8007,
                lng:55.9762,
            },
            zoomed:false,
        },
        {
            label:'Fujairah',
            path:{
                lat:25.1221,
                lng:56.3345
            },
            zoomed:false,
        },
    ]
    React.useEffect(()=>{
        dispatcher(setAllCities(cities));
    },[]);
    const handleCityClicked=(city)=>{
        dispatcher(setCurrentCity(city))
    }
  return (
    <div className="w-full bg-[#954535] h-12 flex items-center justify-center">
        {/* Cities  */}
        <div className="flex w-9/12  sm:w-full md:w-10/12 items-center xl:space-x-10 lg:space-x-8 md:space-x-6 sm:space-x-5 space-x-0 pl-1 box-border">
                {cities && cities.map((city,index)=>(
                    <p className="text-white cursor-pointer text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-lg whitespace-nowrap overflow-hidden " key={index} onClick={()=>handleCityClicked(city)}>{city.label}</p>
                ))}
        </div>
        {/* current Date */}    
        <div className="w-3/12  flex justify-end pr-5 items-center">
        <span className="text-[10px] sm:text-sm text-white cursor-pointer ">{new Date().toLocaleDateString('en-GB',{
            day:'2-digit',
            month:'long',
            year:'numeric'
        })}</span>
        </div>
    </div>
  )
}

export default CitiesNavigation
