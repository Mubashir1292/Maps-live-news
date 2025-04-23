import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { setCurrentNews } from '../store/newsSlice';
import {setCurrentCity} from '../store/switchCities';
import { useDispatch,useSelector} from 'react-redux';
const ZoomController=({center,zoom})=>{
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
    // Getting user's Location which will filter out his news and types
    React.useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        const userLocation =[position.coords.latitude,position.coords.longitude];
        setCenter(userLocation);
        dispatch(setCurrentCity({
          label:'User Location',
          path:{
            lat:position.coords.latitude,
            lng:position.coords.longitude
          },
          zoomed:true,
        })
        )
      })
    },[]);
    return (
    <MapContainer 
      center={center} 
      zoom={13} 
      style={{width:'100%',height:'100%',position:'relative',zIndex:10}}
      key={JSON.stringify(center)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomController center={currentCity.path} zoom={currentCity.zoomed} />
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