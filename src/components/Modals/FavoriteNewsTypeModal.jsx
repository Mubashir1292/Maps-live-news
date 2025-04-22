import React from 'react';
import { FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
const FavoriteNewsTypeModal=({isOpen,Close})=>{
    const[firstVisit,setFirstVisit]=React.useState(false);
    const[loading,setLoading]=React.useState(false);
    const[currentText,setCurrentText]=React.useState("");
    const[userFavoriteNews,setUserFavoriteNews]=React.useState([]);
    // Initial texts
    const initialText = 'AI is generating personalized news recommendations Types for you...';
    const [finalText,setFinalText] = React.useState('Please Choose your favorite news type from the list below:');
    const allNews = useSelector((state)=>state.news.allNews);
    console.log(allNews);
    const newsFilters=useSelector(state=>state.newsFilter.newsFilters);
    const [selectedCategories,setSelectedCategories]=React.useState([]);
    const handleCategoryClick=(category)=>{
        // handling the state management 
        setSelectedCategories((prev)=>
        {
            if(prev.some((i=>i.id===category.id))){
               return prev.filter(i=>i.id!==category.id);
            }else{
                return [...prev,category];
            }
        }
        )
    }
    const handleCategoryAlreadyExists=(category)=>{
        const checkingCategory=selectedCategories.find((item)=>item.id===category.id);
        if(checkingCategory){
            return true;
        }else{
            return false;
        }
    }
    React.useEffect(()=>{
        if(!isOpen) return;
        // setting current text to currentText state
        setCurrentText(initialText);
        setLoading(true);
        const finalTextTimeout=setTimeout(()=>{
            setCurrentText(finalText);
            setLoading(false);
        },4000);
        return()=>{
            clearTimeout(finalTextTimeout);
        }
    },[isOpen]);
    const handleClose=()=>{
        Close();
    }
    const handleSavePreference=()=>{
        localStorage.setItem("userFavorites",JSON.stringify(selectedCategories));
        setFirstVisit(false);
    }
    const fetchUserFavoriteNews=(favoriteNews)=>{
        const relevantNews=allNews.filter((item)=>favoriteNews.includes(item));
        console.log(relevantNews);
    }
    const checkingFirstUser=()=>{        
        const userFavorites=localStorage.getItem("userFavorites");
        if(userFavorites){
            setFirstVisit(false);
            setFinalText("Your Favorite News Are here!");
            fetchUserFavoriteNews(userFavorites);
        }else{
            setFirstVisit(true);
        }
    }
    React.useEffect(()=>{
        checkingFirstUser();
    },[]);
    return (
        <React.Fragment>
            <div className={`fixed inset-0 bg-black transition-opacity z-10 duration-500 ${isOpen ? "bg-opacity-90 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                   onClick={handleClose}
                >
                <div className={`fixed left-1/2 top-1/4 -translate-x-2/4 -translate-y-1/4 w-full max-w-screen-lg h-[92vh] bg-white shadow-xl overflow-y-auto z-100 rounded-lg transition-full duration-500 ease-in-out ${isOpen ? "opacity-1000 scale-100 pointer-events-auto":"opacity-0 scale-95 pointer-events-none"}`} onClick={(e)=>e.stopPropagation()}>
                    {/* button to close the modal */}
                <div className="flex justify-end items-center  p-2">
                    <button 
                        onClick={handleClose} 
                        className="p-1 rounded-full  hover:bg-gray-100 focus:outline-none"
                        aria-label="Close modal"
                    >
                        <FiX className="text-2xl" />
                    </button>
                </div>
                {/* Modal Content*/}
                    <div className="flex flex-col flex-1 justify-center space-y-4 items-center ">
                            <div className="space-y-4">
                                <h1 className="text-xl font-medium text-gray-800 bg-gradient-to-r from-red-500 via-cyan-500 to-red-500 bg-clip-text text-transparent">
                                    {currentText}
                                </h1>
                            </div>
                        {loading  ? (<div className={`w-8 h-8 rounded-full border-black border-4 border-t-transparent animate-spin`}></div>):
                                <React.Fragment>
                                    {firstVisit ? (
                                        <React.Fragment>
                                            <div className="grid grid-cols-3 gap-4 p-2">
                                            {newsFilters && newsFilters.map((type,index)=>(
                                                <span key={index} 
                                                    className={`p-4 cursor-pointer text-center rounded ${handleCategoryAlreadyExists(type) ? "bg-red-500  hover:bg-red-600":"bg-cyan-500 hover:bg-cyan-600"} text-white`}
                                                    onClick={()=>handleCategoryClick(type)}>{type.value}</span>
                                            ))}
                                            </div>
                                            <button className="text-center px-10 py-3 border bg-gray-800 hover:bg-gray-900 hover:opacity-100 text-white rounded-md" onClick={handleSavePreference}>Save</button>
                                        </React.Fragment>
                                ):(
                                    <React.Fragment>
                                        
                                    </React.Fragment>)}
                                </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )    
}
export default FavoriteNewsTypeModal;