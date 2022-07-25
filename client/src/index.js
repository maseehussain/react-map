import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GoogleMaps from './components/googleMap';
import Table from './components/Table';

import './index.css';

import { useJsApiLoader } from '@react-google-maps/api';

const center = { lat: 51.5072, lng: 0.1276}

export default function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
      return false;
  }

  return (
    // <div className="App">
    //   <h1>Map</h1>
    //   <div className="map-section">
    //     <GoogleMaps />
    //   </div>
    // </div>

    <BrowserRouter>
        <Routes>
            <Route>               
                <Route path="/" element={<GoogleMaps />} />
                <Route path="table" element={<Table />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);