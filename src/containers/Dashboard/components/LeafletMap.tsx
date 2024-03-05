
import '@geoman-io/leaflet-geoman-free';
// import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman-free'; // Import the leaflet-geoman-free module
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import 'leaflet-geoman-free';
// import 'leaflet-geoman-free/dist/leaflet-geoman-free';
// import 'leaflet-geoman-free/dist/leaflet-geoman.css';
import Container from '@mui/material/Container';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import React, { useEffect } from 'react';

interface City {
  name: string
  lat: number
  lon: number
}

const LeafletMap: React.FC = () => {
  useEffect(() => {
    // Create a map centered on Slovakia
    const map: any = L.map('map').setView([48.669, 19.699], 8)

    // Add a base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    // Enable Leaflet Geoman for drawing and editing features
    map.pm.addControls({
      position: 'topleft',
    })

    // Example 
    const cities: City[] = [
      { name: 'Bratislava', lat: 48.1482, lon: 17.1067 },
    ]

    // Create a marker cluster group
    const markers = L.markerClusterGroup()

    // Add markers for each city
    cities.forEach((city) => {
      const marker = L.marker([city.lat, city.lon]).bindPopup(city.name)
      markers.addLayer(marker)
    })

    // Add the marker cluster group to the map
    map.addLayer(markers)
  }, [])

  return <Container id="map" style={{ height: '500px' }} />
}

export default LeafletMap
