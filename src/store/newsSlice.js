import { createSlice } from "@reduxjs/toolkit";
import {LocalNews1,LocalNews2,LocalNews3,sports1,sports2,sports3,weather1,weather2,weather3,Education1,Education2,Education3,Politics1,Politics2,Politics3,FoodandDrinks1,FoodandDrinDrinks2,FoodandDrinks3,Entertainment1,Entertainment2,Entertainment3,Technology1,Technology2,Technology3,BusinessandEconomics1,BusinessandEconomics2,BusinessandEconomics3} from '../components/ImagesData';
const initialNews={
    allNews:[
        {
            "id": 1,
            "title": "Dubai Metro Red Line extension opens to Expo City",
            "description": "The RTA has opened the 15km extension of Dubai Metro Red Line to Expo City, serving 7 new stations. This expansion is expected to significantly reduce traffic congestion in the area and improve connectivity for residents.",
            "date": "2025-04-15T08:15:00.000Z",
            "PublishedBy": "Gulf News",
            "source": "RTA Official Announcement",
            "imageSource": "/src/assets/images/1.jpeg",
            "type": "Local News",
            "sourceUrl": "https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/all-news/news-details/dubai-metro-red-line-extension",
            "city": "Dubai",
            "lat": 25.1193,
            "lng": 55.3773,
            "tags": [
                "Transportation",
                "Infrastructure",
                "Dubai Development"
            ]
        },
        {
            "id": 2,
            "title": "Abu Dhabi launches new family tourism campaign",
            "description": "The Department of Culture and Tourism - Abu Dhabi has unveiled a new global campaign targeting family tourism, highlighting the emirate's cultural landmarks and family-friendly attractions.",
            "date": "2025-04-10T14:30:00.000Z",
            "PublishedBy": "The National",
            "source": "DCT Abu Dhabi",
            "imageSource": "/src/assets/images/2.webp",
            "type": "Local News",
            "sourceUrl": "https://visitabudhabi.ae/en/whats.new/news/2025/family-tourism-campaign",
            "city": "Abu Dhabi",
            "lat": 24.4539,
            "lng": 54.3773,
            "tags": [
                "Tourism",
                "Abu Dhabi",
                "Family"
            ]
        },
        {
            "id": 3,
            "title": "Sharjah announces free parking during Ramadan working hours",
            "description": "Sharjah Municipality has announced that all parking in the emirate will be free during Ramadan working hours to facilitate residents' movement during the holy month.",
            "date": "2025-03-28T10:00:00.000Z",
            "PublishedBy": "Sharjah Times",
            "source": "Sharjah Municipality",
            "imageSource": "/src/assets/images/3.jpg",
            "type": "Local News",
            "sourceUrl": "https://www.sharjah.ae/en/Media/News/Pages/Ramadan-parking.aspx",
            "city": "Sharjah",
            "lat": 25.3463,
            "lng": 55.4209,
            "tags": [
                "Ramadan",
                "Parking",
                "Sharjah"
            ]
        },
        {
            "id": 4,
            "title": "UAE national football team qualifies for 2026 World Cup",
            "description": "The UAE national football team has secured its spot in the 2026 FIFA World Cup after a thrilling 2-1 victory over Saudi Arabia in the final qualifying match.",
            "date": "2025-04-12T21:45:00.000Z",
            "PublishedBy": "Sport360",
            "source": "AFC Official",
            "imageSource": "/src/assets/images/4.jpg",
            "type": "Sports",
            "sourceUrl": "https://www.the-afc.com/en/national/uaet/news/uae_qualifies_2026_world_cup",
            "city": "Riyadh",
            "lat": 24.7136,
            "lng": 46.6753,
            "tags": [
                "Football",
                "World Cup",
                "National Team"
            ]
        },
        {
            "id": 5,
            "title": "Dubai to host inaugural Extreme Sports Championship in 2026",
            "description": "Dubai has been selected to host the first ever Extreme Sports World Championship, featuring events like parkour, freerunning, and tricking across the city's landmarks.",
            "date": "2025-04-05T12:00:00.000Z",
            "PublishedBy": "Khaleej Times",
            "source": "Dubai Sports Council",
            "imageSource": "/src/assets/images/5.jpg",
            "type": "Sports",
            "sourceUrl": "https://www.dsc.ae/en/media-center/news/extreme-sports-championship",
            "city": "Dubai",
            "lat": 25.2048,
            "lng": 55.2708,
            "tags": [
                "Extreme Sports",
                "Championship",
                "Dubai"
            ]
        },
        {
            "id": 6,
            "title": "Emirati jiu-jitsu athlete wins gold at Abu Dhabi Grand Slam",
            "description": "UAE national team member Faisal Al Ketbi claimed gold in the 85kg division at the Abu Dhabi Grand Slam Jiu-Jitsu Championship, defeating Brazilian opponent in the final.",
            "date": "2025-04-08T19:30:00.000Z",
            "PublishedBy": "Emirates News Agency",
            "source": "UAEJJF",
            "imageSource": "/src/assets/images/6.webp",
            "type": "Sports",
            "sourceUrl": "https://www.uaejjf.com/en/news/al-ketbi-wins-gold",
            "city": "Abu Dhabi",
            "lat": 24.4667,
            "lng": 54.3667,
            "tags": [
                "Jiu-Jitsu",
                "Gold Medal",
                "Abu Dhabi"
            ]
        },
        {
            "id": 7,
            "title": "UAE experiences record-breaking April temperatures",
            "description": "The UAE has recorded its highest ever April temperature of 48.7°C in Sweihan, Abu Dhabi, prompting authorities to issue heat exhaustion warnings for outdoor workers.",
            "date": "2025-04-17T16:20:00.000Z",
            "PublishedBy": "The National",
            "source": "NCM UAE",
            "imageSource": "/src/assets/images/7.webp",
            "type": "Weather",
            "sourceUrl": "https://www.ncm.ae/en/climate/heatwave-april-2025",
            "city": "Sweihan",
            "lat": 24.4667,
            "lng": 55.65,
            "tags": [
                "Heatwave",
                "Temperature",
                "Weather Alert"
            ]
        },
        {
            "id": 8,
            "title": "Fog causes major delays at Dubai International Airport",
            "description": "Dense fog blanketed parts of the UAE this morning, reducing visibility to less than 200 meters and causing delays to over 50 flights at Dubai International Airport.",
            "date": "2025-04-14T05:45:00.000Z",
            "PublishedBy": "Gulf News",
            "source": "Dubai Airports",
            "imageSource": "/src/assets/images/8.jpg",
            "type": "Weather",
            "sourceUrl": "https://www.dubaiairports.ae/corporate/media-centre/news/2025/fog-delays",
            "city": "Dubai",
            "lat": 25.2532,
            "lng": 55.3657,
            "tags": [
                "Fog",
                "Airport",
                "Dubai"
            ]
        },
        {
            "id": 9,
            "title": "Rain brings relief to parts of Northern Emirates",
            "description": "Light to moderate rain fell over Ras Al Khaimah and Fujairah yesterday, bringing temporary relief from the heat and reducing dust levels in the atmosphere.",
            "date": "2025-04-11T13:15:00.000Z",
            "PublishedBy": "The National",
            "source": "NCM UAE",
            "imageSource": "/src/assets/images/9.webp",
            "type": "Weather",
            "sourceUrl": "https://www.ncm.ae/en/weather/rain-northern-emirates",
            "city": "Ras Al Khaimah",
            "lat": 25.6741,
            "lng": 55.9804,
            "tags": [
                "Rain",
                "Weather",
                "Northern Emirates"
            ]
        },
        {
            "id": 10,
            "title": "New AI-focused high school to open in Dubai next academic year",
            "description": "Dubai will welcome the region's first artificial intelligence-focused high school in September 2025, offering specialized STEM programs in partnership with leading tech companies.",
            "date": "2025-04-03T09:00:00.000Z",
            "PublishedBy": "Gulf News",
            "source": "KHDA",
            "imageSource": "/src/assets/images/10.jpeg",
            "type": "Education",
            "sourceUrl": "https://www.khda.gov.ae/en/media-centre/news/ai-high-school",
            "city": "Dubai",
            "lat": 25.2048,
            "lng": 55.2708,
            "tags": [
                "Education",
                "AI",
                "Dubai Schools"
            ]
        },
        {
            "id": 11,
            "title": "UAE universities rise in global rankings for research output",
            "description": "Three UAE universities have been ranked among the top 200 globally for research output and innovation, according to the latest QS World University Rankings.",
            "date": "2025-04-07T11:30:00.000Z",
            "PublishedBy": "The National",
            "source": "QS Rankings",
            "imageSource": "/src/assets/images/11.jpg",
            "type": "Education",
            "sourceUrl": "https://www.topuniversities.com/university-rankings-articles/uae-universities-rise",
            "city": "Abu Dhabi",
            "lat": 24.4667,
            "lng": 54.3667,
            "tags": [
                "Universities",
                "Rankings",
                "Research"
            ]
        },
        {
            "id": 12,
            "title": "Sharjah announces free online learning platform for all residents",
            "description": "The Sharjah government has launched a comprehensive e-learning platform offering free courses in various disciplines to all emirate residents, regardless of age or educational background.",
            "date": "2025-04-01T15:00:00.000Z",
            "PublishedBy": "Sharjah Times",
            "source": "Sharjah Education Council",
            "imageSource": "/src/assets/images/12.jpg",
            "type": "Education",
            "sourceUrl": "https://www.sec.shj.ae/en/news/free-elearning-platform",
            "city": "Sharjah",
            "lat": 25.3463,
            "lng": 55.4209,
            "tags": [
                "E-learning",
                "Sharjah",
                "Free Education"
            ]
        },
        {
            "id": 13,
            "title": "UAE announces new cabinet reshuffle focusing on sustainability",
            "description": "His Highness Sheikh Mohammed bin Rashid has announced a cabinet reshuffle, creating new ministries focused on climate change and circular economy as part of UAE's Net Zero 2050 strategy.",
            "date": "2025-04-16T19:00:00.000Z",
            "PublishedBy": "WAM",
            "source": "UAE Government",
            "imageSource": "/src/assets/images/13.jpg",
            "type": "Politics",
            "sourceUrl": "https://www.uaecabinet.ae/en/news/cabinet-reshuffle-2025",
            "city": "Dubai",
            "lat": 25.2697,
            "lng": 55.3094,
            "tags": [
                "Government",
                "Cabinet",
                "UAE"
            ]
        },
        {
            "id": 14,
            "title": "UAE and India sign comprehensive economic partnership agreement",
            "description": "The UAE and India have signed an expanded CEPA that will increase bilateral trade to $100 billion annually within five years and facilitate investment flows between the two countries.",
            "date": "2025-04-13T12:30:00.000Z",
            "PublishedBy": "Emirates News Agency",
            "source": "Ministry of Economy",
            "imageSource": "/src/assets/images/14.jpg",
            "type": "Politics",
            "sourceUrl": "https://www.moec.gov.ae/en/cepa-india",
            "city": "Abu Dhabi",
            "lat": 24.4667,
            "lng": 54.3667,
            "tags": [
                "India",
                "Trade",
                "Diplomacy"
            ]
        },
        {
            "id": 15,
            "title": "Dubai ruler issues law establishing Digital Assets Regulatory Authority",
            "description": "A new law issued by HH Sheikh Mohammed bin Rashid establishes Dubai's Digital Assets Regulatory Authority (DARA) to oversee the growing crypto and blockchain sector in the emirate.",
            "date": "2025-04-06T16:45:00.000Z",
            "PublishedBy": "Dubai Media Office",
            "source": "Dubai Government",
            "imageSource": "/src/assets/images/15.jpeg",
            "type": "Politics",
            "sourceUrl": "https://www.digitaldubai.ae/en/news/dara-establishment",
            "city": "Dubai",
            "lat": 25.2697,
            "lng": 55.3094,
            "tags": [
                "Blockchain",
                "Regulation",
                "Dubai"
            ]
        },
        {
            "id": 16,
            "title": "Dubai Food Festival returns with record number of participants",
            "description": "The 2025 Dubai Food Festival has begun with over 500 dining venues participating, featuring special menus, chef collaborations, and culinary experiences across the city.",
            "date": "2025-04-18T10:00:00.000Z",
            "PublishedBy": "Time Out Dubai",
            "source": "Dubai Tourism",
            "imageSource": "/src/assets/images/16.webp",
            "type": "Food and Drinks",
            "sourceUrl": "https://www.visitdubai.com/en/dff-2025",
            "city": "Dubai",
            "lat": 25.2048,
            "lng": 55.2708,
            "tags": [
                "Food Festival",
                "Dubai",
                "Culinary"
            ]
        },
        {
            "id": 17,
            "title": "Abu Dhabi's first vegan fine dining restaurant awarded Michelin star",
            "description": "Plant-based restaurant \"Roots\" in Abu Dhabi has been awarded a Michelin star, becoming the first fully vegan establishment in the region to receive the prestigious culinary honor.",
            "date": "2025-04-04T18:30:00.000Z",
            "PublishedBy": "The National",
            "source": "Michelin Guide",
            "imageSource": "/src/assets/images/17.jpg",
            "type": "Food and Drinks",
            "sourceUrl": "https://guide.michelin.com/ae/en/abudhabi/restaurant/roots",
            "city": "Abu Dhabi",
            "lat": 24.4667,
            "lng": 54.3667,
            "tags": [
                "Vegan",
                "Michelin",
                "Abu Dhabi"
            ]
        },
        {
            "id": 18,
            "title": "Traditional Emirati coffee added to UNESCO intangible heritage list",
            "description": "The traditional preparation and drinking of Arabic coffee in UAE has been officially inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity.",
            "date": "2025-04-02T14:15:00.000Z",
            "PublishedBy": "Emirates News Agency",
            "source": "UNESCO",
            "imageSource": "/src/assets/images/18.jpg",
            "type": "Food and Drinks",
            "sourceUrl": "https://ich.unesco.org/en/RL/emirati-coffee-12345",
            "city": "Abu Dhabi",
            "lat": 24.4667,
            "lng": 54.3667,
            "tags": [
                "Coffee",
                "Heritage",
                "UNESCO"
            ]
        },
        {
            "id": 19,
            "title": "Beyoncé announces Dubai concert as part of world tour",
            "description": "Global superstar Beyoncé has included Dubai on her 2026 Renaissance World Tour, with a show scheduled at the new Dubai Arena in January 2026.",
            "date": "2025-04-15T20:00:00.000Z",
            "PublishedBy": "Rolling Stone ME",
            "source": "Live Nation",
            "imageSource": "/src/assets/images/19.webp",
            "type": "Entertainment",
            "sourceUrl": "https://www.livenationme.com/event/beyonce-dubai-2026",
            "city": "Dubai",
            "lat": 25.2048,
            "lng": 55.2708,
            "tags": [
                "Concert",
                "Beyoncé",
                "Music"
            ]
        },
        {
            "id": 20,
            "title": "Netflix announces first Arabic original series filmed entirely in UAE",
            "description": "Streaming giant Netflix has revealed its first Arabic original series produced entirely in the UAE, featuring an all-Emirati cast and crew telling a supernatural thriller story set in Dubai.",
            "date": "2025-04-09T11:00:00.000Z",
            "PublishedBy": "Variety Arabia",
            "source": "Netflix",
            "imageSource": "/src/assets/images/20.jpg",
            "type": "Entertainment",
            "sourceUrl": "https://media.netflix.com/en/press-releases/uae-original-series",
            "city": "Dubai",
            "lat": 25.2048,
            "lng": 55.2708,
            "tags": [
                "Netflix",
                "Series",
                "Arabic Content"
            ]
        },
        {
            "id": 21,
            "title": "Louvre Abu Dhabi announces major Marvel comics exhibition",
            "description": "Louvre Abu Dhabi will host \"Marvel: Universe of Super Heroes\", the largest exhibition of Marvel comics artwork ever assembled, opening October 2025.",
            "date": "2025-04-07T15:45:00.000Z",
            "PublishedBy": "The National",
            "source": "Louvre Abu Dhabi",
            "imageSource": "/src/assets/images/21.webp",
            "type": "Entertainment",
            "sourceUrl": "https://www.louvreabudhabi.ae/en/whats-on/exhibitions/marvel-comics",
            "city": "Abu Dhabi",
            "lat": 24.5333,
            "lng": 54.4,
            "tags": [
                "Marvel",
                "Exhibition",
                "Louvre"
            ]
        },
        {
            "id": 22,
            "title": "UAE launches region's first quantum computing research center",
            "description": "The UAE has inaugurated the Gulf's first dedicated quantum computing research facility in Masdar City, with plans to develop the region's first functional quantum computer by 2028.",
            "date": "2025-04-14T13:00:00.000Z",
            "PublishedBy": "WAM",
            "source": "Ministry of AI",
            "imageSource": "/src/assets/images/22.jpg",
            "type": "Technology",
            "sourceUrl": "https://www.moai.gov.ae/en/quantum-research-center",
            "city": "Abu Dhabi",
            "lat": 24.4333,
            "lng": 54.6167,
            "tags": [
                "Quantum",
                "Technology",
                "Research"
            ]
        },
        {
            "id": 23,
            "title": "Dubai tests autonomous air taxis for commercial operations",
            "description": "Dubai RTA has begun final testing phase for autonomous air taxis, with plans to launch commercial operations between Dubai Marina and Palm Jumeirah by end of 2025.",
            "date": "2025-04-08T09:30:00.000Z",
            "PublishedBy": "Khaleej Times",
            "source": "Dubai RTA",
            "imageSource": "/src/assets/images/23.jpg",
            "type": "Technology",
            "sourceUrl": "https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/all-news/news-details/air-taxi-testing",
            "city": "Dubai",
            "lat": 25.0763,
            "lng": 55.1323,
            "tags": [
                "Autonomous",
                "Transportation",
                "Dubai"
            ]
        },
        {
            "id": 24,
            "title": "Sharjah researchers develop AI system to predict sandstorms",
            "description": "Scientists at University of Sharjah have created an AI model that can predict sandstorms with 92% accuracy up to 72 hours in advance, potentially saving millions in economic losses.",
            "date": "2025-04-05T11:15:00.000Z",
            "PublishedBy": "The National",
            "source": "University of Sharjah",
            "imageSource": "/src/assets/images/24.jpg",
            "type": "Technology",
            "sourceUrl": "https://www.sharjah.ac.ae/en/Research/sandstorm-ai",
            "city": "Sharjah",
            "lat": 25.3463,
            "lng": 55.4209,
            "tags": [
                "AI",
                "Weather",
                "Research"
            ]
        },
        {
            "id": 25,
            "title": "UAE non-oil economy grows 6.2% in Q1 2025",
            "description": "The UAE's non-oil economy expanded by 6.2% in the first quarter of 2025, driven by strong performance in tourism, logistics, and financial services sectors.",
            "date": "2025-04-17T08:00:00.000Z",
            "PublishedBy": "Bloomberg UAE",
            "source": "UAE Central Bank",
            "imageSource": "/src/assets/images/25.webp",
            "type": "Business and Economics",
            "sourceUrl": "https://www.centralbank.ae/en/news/non-oil-growth-q1-2025",
            "city": "Abu Dhabi",
            "lat": 24.4667,
            "lng": 54.3667,
            "tags": [
                "Economy",
                "Growth",
                "UAE"
            ]
        },
        {
            "id": 26,
            "title": "Dubai property market sees record transactions in March",
            "description": "Dubai's real estate market recorded AED 25.6 billion in transactions during March 2025, the highest monthly figure in history, with luxury properties driving the surge.",
            "date": "2025-04-10T10:45:00.000Z",
            "PublishedBy": "Gulf News",
            "source": "DLD",
            "imageSource": "/src/assets/images/26.jpg",
            "type": "Business and Economics",
            "sourceUrl": "https://www.dubailand.gov.ae/en/media-center/news/record-property-transactions",
            "city": "Dubai",
            "lat": 25.2048,
            "lng": 55.2708,
            "tags": [
                "Real Estate",
                "Dubai",
                "Property"
            ]
        },
        {
            "id": 27,
            "title": "ADNOC announces $150 billion investment in clean energy by 2035",
            "description": "Abu Dhabi National Oil Company has unveiled plans to invest $150 billion in clean energy solutions and decarbonization technologies over the next decade.",
            "date": "2025-04-06T07:30:00.000Z",
            "PublishedBy": "Reuters UAE",
            "source": "ADNOC",
            "imageSource": "/src/assets/images/27.webp",
            "type": "Business and Economics",
            "sourceUrl": "https://www.adnoc.ae/en/news/clean-energy-investment",
            "city": "Abu Dhabi",
            "lat": 24.4667,
            "lng": 54.3667,
            "tags": [
                "Energy",
                "Investment",
                "ADNOC"
            ]
        }
    ],
    filteredNews:[],
    currentNews:null,
    loading:false,
    error:null
}
const newsSlice=createSlice({
    name:'news',
    initialState:initialNews,
    reducers:{
        setAllNews:(state,action)=>{
            state.filteredNews=state.allNews,
            state.loading=false;
        },
        setFilteredNews:(state,action)=>{
            const filterAction=action.payload;
            if(filterAction.id===1){
                state.filteredNews=state.allNews;
            }   
            else
            {
                const filtered=state.allNews.filter((item)=>item.type===filterAction.value);
                state.filteredNews=filtered;
            }
        },
        setCurrentNews:(state,action)=>{
            state.currentNews=action.payload;
        },
        getCurrentNews:(state,action)=>{
            const finding = state.allNews.filter((item)=>item.id===action.payload);
            state.currentNews=finding;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setError:(state,action)=>{
            state.error=action.payload;
        }
    }
})
export const {setAllNews,setCurrentNews,setFilteredNews,setLoading,setError}=newsSlice.actions;
export default newsSlice.reducer;