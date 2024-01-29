import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import LocationsList from './components/LocationsList.jsx';
import data from './Data/data.json';
import './styles/Card.css';

const Home = () => {

  const locations = data; 

  return (
    <div className='_Body'>
      <HeroSection />
      <LocationsList locations={locations} />
    </div>
  );
};

export default Home;

