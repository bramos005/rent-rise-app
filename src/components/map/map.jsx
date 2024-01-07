import { MapContainer, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Circlemarkers from "./circle-markers";
import NavBar from "../NavBar/NavBar";
import Aos from "aos";

const Map = ({ startYear, endYear }) => {
  // const [color, setColor] = useState('#00FF00');
  Aos.init();
  return (
    <div >
      <NavBar></NavBar>
      
      <div data-aos="fade-left" className="flex  flex-col items-center justify-center mt-20 ">
        <h1 className="mb-5 text-2xl text-black font-semibold">Gentrification Map</h1>
        <MapContainer center={[40.73061, -73.935242]} zoom={11}>
          <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Circlemarkers
            startYear={startYear}
            endYear={endYear}></Circlemarkers>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
