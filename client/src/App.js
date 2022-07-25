import { useJsApiLoader } from '@react-google-maps/api';
import GoogleMaps from './components/googleMap'

const center = { lat: 51.5072, lng: 0.1276}

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
      return false;
  }

  return (
    <div className="App">
      <h1>Map</h1>
      <div className="map-section">
        <GoogleMaps />
      </div>
    </div>
  );
}

export default App;
