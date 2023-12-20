import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LocationCards from '../components/LocationCards.jsx';

function LocationsList({ locations }) {
  return (
    <div className="cards-container">
      {locations.map((location) => (
        <Link to={{ pathname: `/ad/${location.id}`, state: { adData: location } }} key={location.id}>
          <LocationCards title={location.title} cover={location.cover} />
        </Link>
      ))}
    </div>
  );
}

export default LocationsList;
