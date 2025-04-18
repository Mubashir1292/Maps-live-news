import React from 'react';
const NewsFilters = () => {
    const[active,setActive]=React.useState(1);
    const filters=[
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
    ]
    const handleFilterClicked=(item)=>{
        setActive(item.id)
        console.log(item);
    }
    return (
        <div className="flex justify-center items-center space-x-2 p-3 overflow-x-auto">
            {filters.map((item,index)=>(
                <span 
                    key={item.id} 
                    className={`cursor-pointer px-3 py-1 text-[10px] font-semibold font-sans rounded-full transition-colors duration-200
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