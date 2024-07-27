import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Navbar, Nav } from 'react-bootstrap';

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
  iconUrl: 'https://static.thenounproject.com/png/4340145-200.png',
  iconSize: [45, 45],
  iconAnchor: [22.5, 22.5],
  popupAnchor: [0, -22.5],
});

const targetLocation1 = [-6.9266176, 107.6196285]; // Target coordinates
const targetLocation2 = [-6.92569, 107.620169]; // Hungry Station coordinates
const radius = 50; // Radius in meters

function MapComponent() {
  const [userLocation, setUserLocation] = useState(null); // State for user's location
  const [activeTarget, setActiveTarget] = useState(null); // State to track which target is active
  const [isInTarget1, setIsInTarget1] = useState(false); // State for target 1 eligibility
  const [isInTarget2, setIsInTarget2] = useState(false); // State for target 2 eligibility
  const [showModal, setShowModal] = useState(false); // State to show or hide modal
  const [modalContent, setModalContent] = useState(""); // State for modal content

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        checkProximity([latitude, longitude]);
      });
    }
  }, []);

  const checkProximity = (location) => {
    const [lat, lng] = location;
    const [targetLat1, targetLng1] = targetLocation1;
    const [targetLat2, targetLng2] = targetLocation2;

    const distance1 = getDistanceFromLatLonInMeters(lat, lng, targetLat1, targetLng1);
    const distance2 = getDistanceFromLatLonInMeters(lat, lng, targetLat2, targetLng2);

    setIsInTarget1(distance1 < radius);
    setIsInTarget2(distance2 < radius);
  };

  const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371000;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const claimNFT = async (network) => {
    try {
      const response = await fetch('http://localhost:5001/claim-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: userLocation[0],
          longitude: userLocation[1],
          network: network,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setModalContent(`Success: ${result.message}`);
      } else {
        setModalContent(`Error: ${result.message}`);
      }
    } catch (error) {
      setModalContent(`Error: ${error.message}`);
    } finally {
      setShowModal(true);
    }
  };

  const claimNFTByBTC = () => {
    setModalContent('Claim NFT by BTC Testnet: Not configured yet');
    setShowModal(true);
  };

  return (
    <>
      {/* Header with navigation */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DingDong</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="https://athens.explorer.zetachain.com/address/0x4f41504b4712E7cCF69B63c27Ef3204Cf35FB8ca?tab=ccTxs">CCTX on My Account</Nav.Link>
          <Nav.Link href="#my-nft">My NFT</Nav.Link>
        </Nav>
      </Navbar>

      <MapContainer center={targetLocation1} zoom={15} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Target marker 1 */}
        <Marker position={targetLocation1} icon={TargetIcon} eventHandlers={{
          click: () => {
            setActiveTarget('target1');
          },
        }}>
        </Marker>
        <Circle center={targetLocation1} radius={radius} color="blue" />
        {/* Target marker 2 */}
        <Marker position={targetLocation2} icon={TargetIcon} eventHandlers={{
          click: () => {
            setActiveTarget('target2');
          },
        }}>
        </Marker>
        <Circle center={targetLocation2} radius={radius} color="red" />
        {/* User's location marker */}
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        {/* Popup for NFT claim eligibility */}
        {activeTarget && (
          <Popup
            position={
              activeTarget === 'target1'
                ? targetLocation1
                : targetLocation2
            }
            onClose={() => setActiveTarget(null)}
          >
            <div>
              <h3>Eligibility for NFT Claim</h3>
              {(activeTarget === 'target1' && isInTarget1) || (activeTarget === 'target2' && isInTarget2) ? (
                <div>
                  <p>You are within the target radius.</p>
                  <Button variant="danger" onClick={() => claimNFT('BSC')}>Claim NFT by BSC Testnet</Button>
                  <Button variant="warning" onClick={claimNFTByBTC}>Claim NFT by BTC Testnet</Button>
                </div>
              ) : (
                <p>You are not within the target radius.</p>
              )}
            </div>
          </Popup>
        )}
      </MapContainer>

      {/* Enlarged Modal for displaying result */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Claim NFT Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MapComponent;
