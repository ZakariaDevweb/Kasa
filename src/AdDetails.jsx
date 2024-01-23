import React, { useState, useEffect } from 'react';
import data from './Data/data.json';
import { useParams, useNavigate } from 'react-router-dom';

import arrowSvg from './assets/arrow.svg';
import ArrowLeft from './assets/arrow-left.svg';
import ArrowRight from './assets/arrow-right.svg';
import StarFilled from './assets/stars-filled.svg';
import StarEmpty from './assets/stars-empty.svg';


import './styles/ad.css';

import Collapse from './components/Collapse.jsx';

function AdDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ad = data.find((ad) => ad.id === id);

  useEffect(() => {
    if (!ad) {
      navigate('/not-found');
    }
  }, [ad, navigate]);

  if (!ad) {
    return null;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img src={ArrowRight} className={className} style={{ ...style, display: "block" }} onClick={onClick} alt="Next" />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img src={ArrowLeft} className={className} style={{ ...style, display: "block" }} onClick={onClick} alt="Previous" />
    );
  }
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isEquipmentVisible, setEquipmentVisible] = useState(false);


  // Animation pour les équipements
  


  if (!ad) {
    return <div>Annonce introuvable</div>;
  }

  return (
    <div className="ad-container">
      <div className="image-slider">
      
        <div className="slider-counter">
          {`${currentSlide + 1}/${ad.pictures.length}`}
        </div>
      </div>
      <div className="first-contain">
        <div className="div-left">
          <div className="ad-location">
            <h2> {ad.title} </h2>
            <p> {ad.location} </p>
          </div>
          <div className="ad-tags">
            <ul>{ad.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
          </div>
        </div>
        <div className="host-info">
          <div className="profil-info">
            <h3 className="host-title"></h3>
            <div className="host-name-container">
              {ad.host.name.split(' ').map((part, index) => (
                <p key={index} className="host-name-part">{part}</p>
              ))}
            </div>
            <img className="host-picture" src={ad.host.picture} alt={ad.host.name} />
          </div>
          <div className="ad-rating">
            <div className="rating-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                index < ad.rating ?
                  <img key={index} src={StarFilled} className="star" alt="filled star" /> :
                  <img key={index} src={StarEmpty} className="star" alt="empty star" />
              ))}

            </div>
          </div>
        </div>
      </div>

      <div className="admain">
        <div className="ad-section description">
          <Collapse
            items={[
              {
                title: 'Description',
                description: ad.description,
              },
            ]}
            customClass1="ad-section-header"
            customClass2="ad-section-content"
          />
        </div>

        <div className="ad-section equipment">
          <Collapse
            items={[
              {
                title: 'Équipements',
                description: ad.equipments.map((equipments, index) => (
                  <p key={index}>{equipments}</p>
                )),
              },
            ]}
            customClass1="ad-section-header"
            customClass2="ad-section-content"
          />
        </div>
      </div>
    </div>


  );
}

export default AdDetails;