import React from 'react';
import { FiX } from 'react-icons/fi';
import { getTimeDifference,renderKnownImage } from '../../pages/AllNews';
import { useDispatch } from 'react-redux';
import {setCurrentCity} from '../../store/switchCities';
function DataModel({ show, onClose, currentNews }) {
  const dispatch=useDispatch();
  React.useEffect(() => {
    const handleKeyDown= (event)=>{
      if(event.key === 'Escape'){
        onClose();
      }
    }
    if (show) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show,onClose]);
  // Lock body scroll when modal is open
  React.useEffect(()=>{
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    }
  },[show]);
  // jumping back to the specific location where news is located by lattitude and longitude
  const handleCloseModalAndShowMap=()=>{
    dispatch(setCurrentCity({
      label:'Previous News City',
      path:{
        lat:currentNews && currentNews.lat,
        lng:currentNews && currentNews.lng
      },
      zoomed:true,
    }))
    onClose();
  }
  return (
    <>
      {/* Overlay with fade transition */}
      <div
        className={`fixed inset-0 bg-black right-0 z-40 transition-opacity duration-300 ${
          show ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}  onClick={onClose}/>
      {/* Modal Content with slide transition */}
      <div
        className={`fixed top-2 right-0 h-[95vh] w-11/12 max-w-screen-md bg-white 
          shadow-xl overflow-y-auto z-50 transition-transform duration-300 ease-in-out rounded ${
          show ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b z-10 ">
          <div className="flex justify-start items-center space-x-3">
          <span>{renderKnownImage(currentNews &&  currentNews.type)}</span>
          <span>{getTimeDifference(currentNews && currentNews.date)}</span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
            aria-label="Close modal"
          >
            <FiX className="text-2xl" />
          </button>
        </div>
        
        <div className="p-4 flex flex-col">
          {currentNews && (
            <>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-sm text-gray-900 text-center">
                  {currentNews.description}
                </span>
              </div>
              
              {/* Image Section */}
              <div className="w-full mb-4">
                <div className="h-[50vh] flex justify-center items-center bg-gray-100 overflow-hidden rounded-lg">
                  <img 
                    src={currentNews.imageSource} 
                    alt={currentNews.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center mt-1">
                    <button onClick={handleCloseModalAndShowMap} className="text-center w-4/12 bg-[#954535] p-5 rounded-xl text-white">Jump To Map</button>
                </div>
                <div className="flex flex-col flex-start">
                    <h2 className="font-bold">{currentNews.city}</h2>
                    <div className="flex justify-start items-center space-x-1 mt-2">
                        {currentNews.tags.map((item,index)=>(
                            <span key={index} className="bg-[#ddc4be] w-2/12 p-2 text-center text-black font-bold rounded-lg">#{item}</span>
                        ))}
                    </div>
                </div>
                </div>          
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DataModel;