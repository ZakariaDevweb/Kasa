import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import arrowSvg from '../assets/arrow.svg';

import Collapse from './Collapse.jsx';

function About({ ad = {
  flexibilite: "Les annonces postés sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réguliérement vérifiés par nos équipes",
  respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
  service: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
  securite: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
} }) {
  const [isFlexibiliteVisible, setFlexibiliteVisible] = useState(false);
  const [isRespectVisible, setRespectVisible] = useState(false);
  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isSecuriteVisible, setSecuriteVisible] = useState(false);

  const flexibiliteStyle = useSpring({
    config: { duration: 0 }, // Add this line
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: {
      opacity: isFlexibiliteVisible ? 1 : 0,
      maxHeight: isFlexibiliteVisible ? '1000px' : '0px',
      visibility: isFlexibiliteVisible ? 'visible' : 'hidden',
      overflow: isFlexibiliteVisible ? 'visible' : 'hidden',
      transform: isFlexibiliteVisible ? 'translateY(0)' : 'translateY(-100px)',
      background: '#f6f6f6',
      padding: '15px',
      borderRadius: "5px",
      margin: "0px"
    },
  });
  const respectStyle = useSpring({
    config: { duration: 0 },
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: {
      opacity: isRespectVisible ? 1 : 0,
      maxHeight: isRespectVisible ? '1000px' : '0px',
      visibility: isRespectVisible ? 'visible' : 'hidden',
      overflow: isRespectVisible ? 'visible' : 'hidden',
      transform: isRespectVisible ? 'translateY(0)' : 'translateY(-100px)',
      background: '#f6f6f6',
      padding: '15px',
      borderRadius: "5px",
      margin: "0px"
    },
  });

  const serviceStyle = useSpring({
    config: { duration: 0 },
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: {
      opacity: isServiceVisible ? 1 : 0,
      maxHeight: isServiceVisible ? '1000px' : '0px',
      visibility: isServiceVisible ? 'visible' : 'hidden',
      overflow: isServiceVisible ? 'visible' : 'hidden',
      transform: isServiceVisible ? 'translateY(0)' : 'translateY(-100px)',
      background: '#f6f6f6',
      padding: '15px',
      borderRadius: "5px",
      margin: "0px"
    },
  });

  const securiteStyle = useSpring({
    config: { duration: 0 },
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: {
      opacity: isSecuriteVisible ? 1 : 0,
      maxHeight: isSecuriteVisible ? '1000px' : '0px',
      visibility: isSecuriteVisible ? 'visible' : 'hidden',
      overflow: isSecuriteVisible ? 'visible' : 'hidden',
      transform: isSecuriteVisible ? 'translateY(0)' : 'translateY(-100px)',
      background: '#f6f6f6',
      padding: '15px',
      borderRadius: "5px",
      margin: "0px"
    },
  });

  return (
    <>
      <div className='_Body'>

        <div className="hero2">
        </div>

        <div className="about-container">

          <div className="about-section">

            <Collapse
              items={[
                {
                  title: 'Flexibilité',
                  description: ad.flexibilite,
                },
              ]}
              customClass1="about-section-header"
              customClass2="about-section-content"
            />

          </div>

          <div className="about-section">

            <Collapse
              items={[
                {
                  title: 'Respect',
                  description: ad.respect,
                },
              ]}
              customClass1="about-section-header"
              customClass2="about-section-content"
            />

          </div>

          <div className="about-section">

            <Collapse
              items={[
                {
                  title: 'Service',
                  description: ad.service,
                },
              ]}
              customClass1="about-section-header"
              customClass2="about-section-content"
            />

          </div>

          <div className="about-section">

            <Collapse
              items={[
                {
                  title: 'Sécurité',
                  description: ad.securite,
                },
              ]}
              customClass1="about-section-header"
              customClass2="about-section-content"
            />

          </div>
        </div>

      </div>
    </>
  );
}

export default About;