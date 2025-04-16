import CitiesNavigation from "./components/CitiesNavigation";
import Header from "./components/Header";
import AllNews from "./pages/AllNews";
import MapWithMarkers from "./pages/MainMap";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <CitiesNavigation />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-9/12 h-full">
          <MapWithMarkers />
        </div>
        <div className="w-11/12 md:w-3/12 h-full ">
          <AllNews />
        </div>
      </div>
    </div>
  );
}

export default App;
