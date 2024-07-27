import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default marker icon settings for Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom icon for the target location
const TargetIcon = L.icon({
  iconUrl: 'https://static.thenounproject.com/png/4340145-200.png', // Replace with your custom icon URL
  iconSize: [45, 45], // Small icon size
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});

const targetLocation = [-6.9266176, 107.6196285]; // Target coordinates
const radius = 50; // Radius in meters

function MapComponent() {
  const [userLocation, setUserLocation] = useState(null); // State for user's location
  const [isInTarget, setIsInTarget] = useState(false); // State to check if user is within the target radius

  // Get user's current location when the component mounts
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log('User location:', latitude, longitude); // Log user's location
        setUserLocation([latitude, longitude]); // Set user's location
        checkProximity([latitude, longitude]); // Check if the user is within the target radius
      });
    }
  }, []);

  // Function to check if the user's location is within the target radius
  const checkProximity = (location) => {
    const [lat, lng] = location;
    const [targetLat, targetLng] = targetLocation;
    const distance = getDistanceFromLatLonInMeters(lat, lng, targetLat, targetLng);
    if (distance < radius) {
      setIsInTarget(true); // User is within the target radius
    } else {
      setIsInTarget(false); // User is outside the target radius
    }
  };

  // Haversine formula to calculate distance between two lat/lon points
  const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371000; // Radius of the Earth in meters
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in meters
    return d;
  };

  // Convert degrees to radians
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  // Function to claim NFT
  const claimNFT = async () => {
    try {
      const response = await fetch('http://localhost:5000/claim-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.success) {
        alert(`Success: ${result.message}`);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <MapContainer center={targetLocation} zoom={15} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Target marker */}
      <Marker position={targetLocation} icon={TargetIcon}>
        <Popup>Target location</Popup>
      </Marker>
      {/* Circle indicating the target radius */}
      <Circle
        center={targetLocation}
        radius={radius}
        color="blue"
      />
      {/* User's location marker */}
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>
            You are here
            {isInTarget ? (
              <div>
                <p>You are eligible for claiming NFT.</p>
                <button onClick={claimNFT}>Claim NFT</button>
              </div>
            ) : (
              <p>You are not in the target location.</p>
            )}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default MapComponent;
