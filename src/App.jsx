import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import CitiesNavigation from "./components/CitiesNavigation";
import Header from "./components/Header";
import AllNews from "./pages/AllNews";
import MapWithMarkers from "./pages/MainMap";
import { setFilteredNews } from './store/newsSlice';

function App() {
  const dispatch=useDispatch();
  const currentFilter=useSelector((state)=>state.newsFilter.currentNewsFilter);
  React.useEffect(()=>{
    dispatch(setFilteredNews(currentFilter));
  },[dispatch]);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <CitiesNavigation />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-8/12 h-full">
          <MapWithMarkers />
        </div>
        <div className="w-11/12 md:w-4/12 h-full ">
          <AllNews />
        </div>
      </div>
    </div>
  );
}

export default App;
