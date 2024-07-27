// src/App.js

import React from 'react';
import './App.css';
import MapComponent from './MapComponent';
// src/index.js atau src/App.js
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div className="App">
      <MapComponent />
    </div>
  );
}

export default App;
