import React from 'react';
import { FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { getTimeDifference, renderKnownImage } from '../../pages/AllNews';
const FavoriteNewsTypeModal = ({ isOpen, Close }) => {
    //! State Management
    const [currentText, setCurrentText] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [isFirstVisit, setIsFirstVisit] = React.useState(true);
    const newsFilters = useSelector(state => state.newsFilter.newsFilters);
    const allNews = useSelector(state => state.news.allNews);
    const [selectedFavCategories, setSelectedFavCategories] = React.useState([]);
    const [userFavNews, setUserFavNews] = React.useState([]);
    //! Just the headings
    const initialText = 'AI is generating personalized news recommendations Types for you...';
    const [finalText, setFinalText] = React.useState('Please Choose your favorite news type from the list below:');
    // ? Starting of the Application
    React.useEffect(() => {
        if (!isOpen) return;
        setLoading(true);
        setCurrentText(initialText);
        const checkForFavCategories = setTimeout(() => {
            setLoading(false);
            setCurrentText(finalText)
        }, 4000);
        return () => clearTimeout(checkForFavCategories);
    }, [isOpen, finalText]);
    //* function of handleClose
    const handleClose = () => {
        Close();
    }
    //* function of Already Checking
    const handleCategoryAlreadyExists = (type) => {
        return selectedFavCategories.find((item) => item.id === type.id);
    }
    // * function of Adding Category to favorites
    const handleCategoryClick = (categoryType) => {
        setSelectedFavCategories((prev) => {
            if (prev.some((item) => item.id === categoryType.id)) {
                return prev.filter(item => item.id !== categoryType.id);
            } else {
                return [...prev, categoryType];
            }
        })
    }
    // * function of saving the preferences 
    const handleSavePreference = () => {
        localStorage.setItem("userPreferences", JSON.stringify(selectedFavCategories));
        setIsFirstVisit(false);
        fetchSavePreferences();
    }
    // * function to check if the localStorage has already the values
    const fetchSavePreferences = () => {
        const savedPreferences = JSON.parse(localStorage.getItem("userPreferences"));
        if (savedPreferences !== null) {
            setSelectedFavCategories(savedPreferences);
            setIsFirstVisit(false);
            gettingAllNewsBack(savedPreferences);
        }
    }
    React.useEffect(() => {
        fetchSavePreferences();
    }, [isFirstVisit]);
    // * Creating this function for returning back the elements
    const gettingAllNewsBack = (savedPreferences) => {
        const favIds = savedPreferences.length > 0 && savedPreferences.map(item => item.value);
        const favNews = allNews.filter((item) => favIds.includes(item.type));
        if (favNews !== null) {
            setUserFavNews(favNews);
            setFinalText("Here's Your Favorite News Feed");
        }
    }
    // * handling the news click
    const handleClickNews=(newsId)=>{
        console.log(newsId);
    }
    return (
        <React.Fragment>
            <div className={`fixed inset-0 bg-black transition-opacity z-10 duration-500 ${isOpen ? "bg-opacity-90 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={handleClose}
            >
                <div className={`fixed left-1/2 top-1/4 -translate-x-2/4 -translate-y-1/4 w-full max-w-screen-lg h-[92vh] bg-white shadow-xl overflow-y-auto z-100 rounded-lg transition-full duration-500 ease-in-out ${isOpen ? "opacity-1000 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`} onClick={(e) => e.stopPropagation()}>
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
                        {loading ? (<div className={`w-8 h-8 rounded-full border-black border-4 border-t-transparent animate-spin`}></div>) :
                            <React.Fragment>
                                {isFirstVisit ? (
                                    <React.Fragment>
                                        <div className="grid grid-cols-3 gap-4 p-2">
                                            {newsFilters && newsFilters.map((type, index) => (
                                                <span key={index}
                                                    className={`p-4 cursor-pointer text-center rounded ${handleCategoryAlreadyExists(type) ? "bg-red-500  hover:bg-red-600" : "bg-cyan-500 hover:bg-cyan-600"} text-white`}
                                                    onClick={() => handleCategoryClick(type)}>{type.value}</span>
                                            ))}
                                        </div>
                                        <button className="text-center px-10 py-3 border bg-gray-800 hover:bg-gray-900 hover:opacity-100 text-white rounded-md" onClick={handleSavePreference}>Save</button>
                                    </React.Fragment>
                                ) : (
                                    <div className="h-full flex flex-col items-center overflow-y-auto space-y-1">
                                        {userFavNews && userFavNews.map((item, index) => (
                                            <div className="w-7/12 h-auto flex flex-col justify-center  py-2 px-5 box-border bg-gray-100 cursor-pointer"  key={index} >
                                                <div className="flex justify-between items-center">
                                                    {/* sing of news */}
                                                    <span>{renderKnownImage(item.type)}</span>
                                                    {/* date and Time*/}
                                                    <span className="text-sm">{getTimeDifference(item.date)}</span>
                                                    <button className="bg-[#954535] text-center p-2 text-white text-[10px] rounded-lg w-2/12">See More</button>
                                                </div>
                                                <p className="m-2 text-[10px]">{item.description}</p>
                                                <img className="rounded w-5/12 self-center" src={item.imageSource} alt={item.title} />
                                            </div>
                                        ))}
                                    </div>
                                )
                                }
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FavoriteNewsTypeModal;