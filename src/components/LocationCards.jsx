import React from 'react';
import '../components/Card.css';
import LocationsList from '../components/LocationsList.jsx'; 


const LocationCards = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={`Couverture pour ${title}`} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default LocationCards;
