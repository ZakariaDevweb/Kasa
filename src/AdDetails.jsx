import { useState, useEffect } from 'react';
import data from './Data/data.json';
import { useParams, useNavigate } from 'react-router-dom';
import StarFilled from './assets/stars-filled.svg';
import StarEmpty from './assets/stars-empty.svg';
import Carrousel from './components/Carrousel.jsx';

import './styles/ad.css';

import Collapse from './components/Collapse.jsx';

function AdDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ad = data.find((ad) => ad.id === id);

  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isEquipmentVisible, setEquipmentVisible] = useState(false);

  useEffect(() => {
    if (!ad) {
      navigate('/not-found');
    }
  }, [ad, navigate]);

  if (!ad) {
    return null;
  }


  return (
    <div className="ad-container">
      <div className="image-slider">
        <Carrousel images={ad.pictures} />
        {/* <div className="slider-counter">
          {`${currentSlide + 1}/${ad.pictures.length}`}
        </div> */}
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
            isOpen={isDescriptionVisible}
            toggle={() => setDescriptionVisible(!isDescriptionVisible)}
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
            isOpen={isEquipmentVisible}
            toggle={() => setEquipmentVisible(!isEquipmentVisible)}
            customClass1="ad-section-header"
            customClass2="ad-section-content"
          />
        </div>
      </div>
    </div>
  );
}

export default AdDetails;