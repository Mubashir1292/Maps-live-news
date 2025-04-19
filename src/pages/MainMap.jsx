import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { setAllNews,setCurrentNews } from '../store/newsSlice';
import { useDispatch,useSelector} from 'react-redux';
const zoomController=({center,zoom})=>{
  const map=useMap();
  React.useEffect(()=>{
    if(zoom){
      map.flyTo(center,18,{
        duration:1,
        easeLinearity:0.25,
      });
    }else{
      map.flyTo(center,13,{
        duration:1
      })
    }
  },[center,zoom,map]);
  return null;
}
function MapWithMarkers(){
    const dispatch=useDispatch();
    const currentCity=useSelector(state=>state.cities.currentCity);
    const[center,setCenter] = React.useState([25.2048, 55.2708]);
    React.useEffect(()=>{
      if(currentCity && currentCity.path){
        setCenter([currentCity.path.lat,currentCity.path.lng]);
      }
    },[currentCity]);
    const switchingMarker=(marker)=>{
        const filteredNews = news.filter((n)=>n.id===marker);
        setCurrentNews(filteredNews);
        dispatch(setCurrentNews(filteredNews));
    }
    return (
    <MapContainer 
      center={center} 
      zoom={13} 
      style={{width:'100%',height:'100%',position:'relative',zIndex: 10,}}
      key={JSON.stringify(center)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    <Marker 
     position={center}
        eventHandlers={{
            click:()=>switchingMarker(1)
        }}
     >
        <Popup>Here's a news</Popup>
    </Marker>
    </MapContainer>
  );
}

export default MapWithMarkers