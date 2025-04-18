import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const[isShowMenu,setIsShowMenu]=React.useState(false);
  return (
    <React.Fragment>
    <div className="w-full flex justify-between sm:justify-around  items-center border pt-6 pl-12 pb-5">
      <div className="w-6/12 text-lg">
        <p className="font-bold text-xl sm:text-3xl  font-sans">
          MapCast
        </p>
      </div>
      {/* Search Input and other */}
      <div className="w-6/12 flex justify-end items-center">
        <div className="w-full  justify-center items-center hidden sm:flex">
          <div className="relative xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-full flex justify-center items-center">
            <input
              type="text"
              name="searchCity"
              id="searchCity"
              className="w-full text-[10px] p-2 bg-[#f9f9f9] text-[#797878] focus:border-none"
              placeholder="Ride into the best products--search now!"
            />
            <RiSearch2Fill className="absolute right-2 text-[#954535] hidden md:block" />
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
        </div>
        {/* Hamburger Menu and Responsiveness of the header */}
        <button className="p-2 focus:outline-none flex sm:hidden" 
        onClick={()=>setIsShowMenu(!isShowMenu)} 
        >
        {isShowMenu ? (
          <FiX className="text-2xl"/>
        ):(
          <FiMenu className="text-2xl"/>
        )}
        </button>
      </div>
      {/* Hamburger Menu  */}
    </div>
      <div 
      className={`w-full flex items-center justify-end  sm:hidden overflow-hidden sm:flex-row transition-all ease-in-out duration-300 m-0
                  space-y-4 sm:space-y-0 sm:space-x-4 
                  ${isShowMenu ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
         <div className="w-5/12 flex flex-col bg-gray-200 p-4 sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Search Bar */}
          <div className="w-full relative">
            <input
              type="text"
              name="searchCityMobile"
              id="searchCityMobile"
              className="w-full text-[10px] p-2 bg-[#f9f9f9] text-[#797878] focus:border-none"
              placeholder="Ride into the best products--search now!"
            />
            <RiSearch2Fill className="absolute right-2 top-2 text-[#954535]" />
          </div>
          
          {/* Icons */}
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
        </div>
     </div>
        

    </React.Fragment>
  );
}

export default Header;
