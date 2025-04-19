import React from 'react'
import { useSelector} from 'react-redux'
import DataModel from '../components/DataModel';
import  suicide from '../assets/images/suicide.svg'
import speaker from '../assets/images/speaker.svg';
export function getTimeDifference(isoDateString) {
    const newsTime = new Date(isoDateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - newsTime) / 1000);
    
    // Calculate time differences
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };
    
    // Find the largest unit that fits
    for (const [unit, seconds] of Object.entries(intervals)) {
      const interval = Math.floor(diffInSeconds / seconds);
      
      if (interval >= 1) {
        return interval === 1 ? `${interval} ${unit} ago` : `${interval} ${unit}s ago`;
      }
    }
    
    return 'just now';
  };

export function renderKnownImage(newsType){
    return (
        <img className="w-10 h-10 rounded-full" src={newsType === "suicide" ?suicide : speaker } alt={newsType} />
    )
}
function AllNews() {
    const [isDataModalOpen,setIsDataModalOpen]=React.useState(false);
    const [currentNews,setCurrentNews]=React.useState(null);
    const handleClose=()=>{
        setIsDataModalOpen(false);
    }
    const filteredNews=useSelector((state)=>state.news.filteredNews);
    const handleClickNews=(id)=>{
        setIsDataModalOpen(true);
      const news = filteredNews.find(item=>item.id===id);
      setCurrentNews(news);
    }
  return (
    <React.Fragment>
    <div className="h-full overflow-y-auto space-y-1 ">
    {filteredNews && filteredNews.map((item,index)=>(
        <div className="w-full h-auto p-5 box-border bg-gray-100 cursor-pointer" onClick={()=>handleClickNews(item.id)} key={index} >
            <div className="flex justify-between items-center">
                {/* sing of news */}
                <span>{renderKnownImage(item.type)}</span>
                {/* date and Time*/}
                <span>{getTimeDifference(item.date)}</span>
                <button className="bg-[#954535] text-center p-2 text-white text-[12px] rounded-lg w-5/12">See More</button>
            </div>
            <p className="m-2">{item.description}</p>
            <img className="rounded" src={item.imageSource} alt={item.title} />
        </div>
    ))}
    </div>
    <DataModel show={isDataModalOpen} onClose={handleClose} currentNews={currentNews}  />
    </React.Fragment>
)
}

export default AllNews
