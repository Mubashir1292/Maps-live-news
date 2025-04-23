import React from 'react'
import { useSelector } from 'react-redux'
import DataModel from '../components/Modals/DataModel';
import suicide from '../assets/images/suicide.svg'
import speaker from '../assets/images/speaker.svg';
import FavoriteNewsTypeModal from '../components/Modals/FavoriteNewsTypeModal';
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

export function renderKnownImage(newsType) {
  return (
    <img className="w-10 h-10 rounded-full" src={newsType === "suicide" ? suicide : speaker} alt={newsType} />
  )
}
const handleOpenSource = (url) => {
  window.open(url, "_blank", "noopener,noreferrer")
}
function AllNews() {
  const [loading, setLoading] = React.useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = React.useState(false);
  const [currentNews, setCurrentNews] = React.useState(null);
  const [favouriteModal, setFavouriteModal] = React.useState(false);
  const handleCloseFavouriteModal = () => {
    setFavouriteModal(false);
  }
  React.useEffect(() => {
    setLoading(true);
    const loadTheData = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => { clearTimeout(loadTheData) };
  }, []);
  const handleClose = () => {
    setIsDataModalOpen(false);
  }
  const handleFavoriteModalOpen = () => {
    setFavouriteModal(true);
  }
  React.useEffect(() => {
    setTimeout(() => {
      handleFavoriteModalOpen();
    }, 15000);
  }, []);
  const filteredNews = useSelector((state) => state.news.filteredNews);
  const handleClickNews = (newsItem) => {
    setIsDataModalOpen(true);
    setCurrentNews(newsItem);
    console.log(newsItem);
  }
  return (
    <React.Fragment>
      <div className={`h-full overflow-y-auto space-y-1`}>
        {loading ? <div className=" flex justify-center items-center">
        <div className="w-8 h-8 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
    </div> :
          <React.Fragment>
            {filteredNews && filteredNews.map((item, index) => (
              <div className="w-full h-auto p-5 box-border bg-gray-100 cursor-pointer" onClick={() => handleClickNews(item)} key={index} >
                <div className="flex justify-between items-center">
                  {/* sing of news */}
                  <span>{renderKnownImage(item.type)}</span>
                  {/* date and Time*/}
                  <span className="text-[8px] sm:text-lg">{getTimeDifference(item.date)}</span>
                  <button className="bg-[#954535] text-center p-2 text-white text-[12px] rounded-lg w-5/12" onClick={(e) => {
                    e.stopPropagation();
                    handleOpenSource(item.sourceUrl)
                  }}
                  >See More</button>
                </div>
                <p className="m-2">{item.description}</p>
                <img className="rounded" src={item.imageSource} alt={item.title} />
              </div>
            ))}
          </React.Fragment>
        }
    </div>
      <DataModel show={isDataModalOpen} onClose={handleClose} currentNews={currentNews} />
      <FavoriteNewsTypeModal isOpen={favouriteModal} Close={handleCloseFavouriteModal} />
    </React.Fragment>
  )
}

export default AllNews
