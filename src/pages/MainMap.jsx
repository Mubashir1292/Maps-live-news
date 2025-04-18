import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import someOneJumped from '../assets/images/someoneJumped.webp';
import { setAllNews,setCurrentNews } from '../store/newsSlice';
import { useDispatch,useSelector} from 'react-redux';
function MapWithMarkers(){
    const dispatch=useDispatch();
    const[City,setCurrentCity] = React.useState();
    const[news,setNews]=React.useState([
        {
            id:1,
            title:'Some one hanged from Burj Khalifa',
            description:'A Man from Nigeria had jumped from the world`s highest building due to financial crisis,The link between suicide and mental disorders (in particular, depression and alcohol use disorders) and a previous suicide attempt is well established in high-income countries. ',
            date:'2025-04-09T11:32:32.843Z',
            PublishedBy:'Dubai News',
            source:'Random News Publisher',
            imageSource:someOneJumped,
            type:'suicide',
            city:'Dubai',
            tags:[
              "Dubai","Main City","Bad News"
            ]
        },
    ])
    React.useEffect(()=>{
      dispatch(setAllNews(news));
      const currentCity=useSelector(state=>state.cities.currentCity);
      if(currentCity){
        setCurrentCity(currentCity);
      }else{
        setCurrentCity({
          label:'randomLocation',
          path:{
            lat:25.2048,lng:55.2708
          }
        })
      }
    },[]);
    const switchingMarker=(marker)=>{
        const filteredNews = news.filter((n)=>n.id===marker);
        setCurrentNews(filteredNews);
        dispatch(setCurrentNews(filteredNews));
    }
    return (
    <MapContainer 
      center={City.path} 
      zoom={13} 
      style={{width:'100%',height:'100%',position:'relative',zIndex: 10,}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    <Marker 
     position={{lat:25.2048,lng:55.2708}}
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