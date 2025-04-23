import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import NewsFilters from "./NewsFilters";
import {  useSelector } from "react-redux";
import DataModel from "./Modals/DataModel";
function Header() {
  const allNews=useSelector(state=>state.news.allNews);
  const[isDataModalOpen,setIsDataModalOpen]=React.useState(false);
  const[currentNews,setCurrentNews]=React.useState();
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState([]);
  const [searchCity, setSearchCity] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const handleClose=()=>{
    setIsDataModalOpen(false);
  }
  const fetchNewsSuggestions = async (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    setShowSuggestions(true);
    const matchingResponses=allNews.filter((item)=>item.description.toLowerCase().includes(query.toLowerCase()));
    console.log(matchingResponses);
    setSuggestions(matchingResponses);
  };


  const handleSearchCityNameChange = (event) => {
    const query = event.target.value;
    setSearchCity(query);
      fetchNewsSuggestions(query);
    setShowSuggestions(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchCity.trim()) {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchCity(suggestion.title);
    setShowSuggestions(false);
    setIsDataModalOpen(true);
    setCurrentNews(suggestion);
  };
  React.useEffect(()=>{
  },[]);
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="w-full flex justify-between sm:justify-around items-center border pt-6 pl-12 border-none">
          <div className="w-6/12 text-lg">
            <p className="font-bold text-xl sm:text-3xl font-sans">MapCast</p>
          </div>
          
          <div className="w-6/12 flex justify-end items-center">
            <form 
              className="w-full justify-center items-center hidden sm:flex"
              onSubmit={handleSubmit}
            >
              <div className="relative xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-full flex justify-center items-center">
                <input
                  type="text"
                  name="searchCity"
                  id="searchCity"
                  className="w-full text-[10px] p-2 bg-[#f9f9f9] text-[#797878] focus:border-none"
                  placeholder="Search for news articles..."
                  value={searchCity}
                  onChange={handleSearchCityNameChange}
                />
                <button type="submit" className="flex justify-center items-center">
                  <RiSearch2Fill className="absolute right-2 text-[#954535] hidden md:block" />
                </button>
                
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full  left-0 right-0 bg-white border border-gray-200 z-[1000] mt-1 max-h-60 overflow-auto">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion && suggestion.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="w-4/12 sm:w-8/12 flex justify-center items-center space-x-4 sm:space-x-5 md:space-x-8">
                <div className="flex flex-col justify-center items-center">
                  <BiSolidMessageSquareDetail className="text-lg sm:text-2xl"/>
                  <span className="text-[5px] sm:text-[6px]">Contact Us</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <IoPerson className="text-lg sm:text-2xl"/>
                  <span className="text-[5px] sm:text-[6px] leading-none">Account</span>
                </div>
              </div>
            </form>
            <button 
              className="p-2 focus:outline-none flex sm:hidden" 
              onClick={() => setIsShowMenu(!isShowMenu)} 
            >
              {isShowMenu ? <FiX className="text-2xl"/> : <FiMenu className="text-2xl"/>}
            </button>
          </div>
        </div>
        
        <div 
          className={`w-full flex items-center justify-end sm:hidden overflow-hidden sm:flex-row transition-all ease-in-out duration-300 m-0
                      space-y-4 sm:space-y-0 sm:space-x-4 
                      ${isShowMenu ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}
        >
          <form className="w-full flex flex-col bg-gray-200 p-4 sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full relative">
              <input
                type="text"
                name="searchCityMobile"
                id="searchCityMobile"
                className="w-full text-[10px] p-2 bg-[#f9f9f9] text-[#797878] focus:border-none"
                placeholder="Search for news articles..."
                value={searchCity}
                onChange={handleSearchCityNameChange}
              />
              <button type="submit">
                <RiSearch2Fill className="absolute right-2 top-2 text-[#954535]" />
              </button>
              
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 z-10 mt-1 max-h-60 overflow-auto">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex w-full justify-around">
              <div className="flex flex-col justify-center items-center">
                <BiSolidMessageSquareDetail className="text-xl" />
                <span className="text-[8px]">Contact Us</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <IoPerson className="text-xl" />
                <span className="text-[8px]">Account</span>
              </div>
            </div>
          </form>
        </div>    
        <NewsFilters/>
      </div>
      <DataModel show={isDataModalOpen} onClose={handleClose} currentNews={currentNews} />
    </React.Fragment>
  );
}

export default Header;