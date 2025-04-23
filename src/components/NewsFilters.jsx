import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentNewsFilter} from '../store/newsFilterSlice';
import {setFilteredNews} from '../store/newsSlice'
const NewsFilters = () => {
    const dispatch=useDispatch();
    const[active,setActive]=React.useState(1);
    const filters=useSelector((state)=>state.newsFilter.newsFilters);
    const handleFilterClicked=(item)=>{
        setActive(item.id)
        dispatch(setCurrentNewsFilter(item));
        dispatch(setFilteredNews(item));
    }
    return (
        <div className="flex flex-nowrap justify-start items-center space-x-2 p-3 overflow-x-auto scrollbar-hide">
            {filters.map((item,index)=>(
                <span 
                    key={item.id} 
                    className={`cursor-pointer whitespace-nowrap px-2 py-1  xl:text-[10px] md:text-[8px] sm:text-[8px] font-semibold font-sans rounded-lg transition-colors duration-200
                    ${active===item.id ? "bg-black text-white":
                    "bg-gray-100 text-black hover:bg-gray-200"}`} 
                    onClick={()=>handleFilterClicked(item)}>
                    {item.value}
                </span>
            ))}
        </div>
    )
}
export default NewsFilters;