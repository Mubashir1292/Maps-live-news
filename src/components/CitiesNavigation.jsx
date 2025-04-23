import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCity, setAllCities } from '../store/switchCities';
import { FiX } from 'react-icons/fi';

function CitiesNavigation() {
    const dispatch = useDispatch();
    const [isDateModalOpen, setIsDateModalOpen] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState(new Date());
    
    const cities=[
        {
            label:'Dubai',
            path:{
                lat:25.2048,
                lng:55.2708
            },
            zoomed:false,
        },
        {
            label:'Abu Dhabi',
            path:{
                lat:24.4539,
                lng:54.3773
            },
            zoomed:false,
        },
        {
            label:'Sharjah',
            path:{
                lat:25.3562,
                lng:55.4272
            },
            zoomed:false,
        },
        {
            label:'Ajman',
            path:{
                lat:25.4052,
                lng:55.5136
            },
            zoomed:false,
        },
        {
            label:'Umm Al Quwain',
            path:{
                lat:25.5508,
                lng:55.5524
            },
            zoomed:false,
        },
        {
            label:'Ras Al Khaimah',
            path:{
                lat:25.8007,
                lng:55.9762,
            },
            zoomed:false,
        },
        {
            label:'Fujairah',
            path:{
                lat:25.1221,
                lng:56.3345
            },
            zoomed:false,
        },
    ]


    React.useEffect(() => {
        dispatch(setAllCities(cities));
    }, [dispatch, cities]);

    const handleCityClicked = (city) => {
        dispatch(setCurrentCity(city));
    };

    const generateDateRange = () => {
        const dates = [];
        const daysToShow = 7; // Show 7 days before and after current date
        
        for (let i = -daysToShow; i <= daysToShow; i++) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        
        return dates;
    };

    const handleDateClick = (date) => {
        setCurrentDate(date);
        setIsDateModalOpen(false);
        // You can add additional logic here if needed
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="w-full bg-[#954535] h-12 flex items-center justify-center">
            {/* Cities */}
            <div className="flex w-9/12 sm:w-full md:w-10/12 items-center xl:space-x-10 lg:space-x-8 md:space-x-6 sm:space-x-5 space-x-0 pl-1 box-border">
                {cities && cities.map((city, index) => (
                    <p 
                        className="text-white cursor-pointer text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-lg whitespace-nowrap overflow-hidden" 
                        key={index} 
                        onClick={() => handleCityClicked(city)}
                    >
                        {city.label}
                    </p>
                ))}
            </div>
            
            {/* Current Date */}
            <div className="w-3/12 flex justify-end pr-5 items-center">
                <span 
                    className="text-[10px] sm:text-sm text-white cursor-pointer" 
                    onClick={() => setIsDateModalOpen(true)}
                >
                    {formatDate(currentDate)}
                </span>
            </div>

            {/* Date Selection Modal */}
            {isDateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Select Date</h2>
                            <button 
                                onClick={() => setIsDateModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FiX size={24} />
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3">
                            {generateDateRange().map((date, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDateClick(date)}
                                    className={`p-2 rounded border ${
                                        date.toDateString() === currentDate.toDateString()
                                            ? 'bg-[#954535] text-white'
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    {formatDate(date)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CitiesNavigation;