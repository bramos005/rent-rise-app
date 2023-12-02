import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Circlemarkers from "./circle-markers";




const Map = ({ startYear, endYear }) => {
  // const [color, setColor] = useState('#00FF00');
  
  
 
  return (
    <div className="map">
      
      <MapContainer center={[40.73061, -73.935242]} zoom={11} maxZoom={13}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Circlemarkers startYear={startYear} endYear={endYear}></Circlemarkers>
      </MapContainer>
    </div>
  );
};

export default Map;
