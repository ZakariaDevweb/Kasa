import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import arrowSvg from '../assets/arrow.svg'; 

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
      background:'#f6f6f6',
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
      background:'#f6f6f6',
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
      background:'#f6f6f6',
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
      background:'#f6f6f6',
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
          <button className="about-section-header" onClick={() => setFlexibiliteVisible(!isFlexibiliteVisible)}>
           <h2>Flexibilité</h2>
            <img src={arrowSvg} className={`ad-arrow ${isFlexibiliteVisible ? 'up' : ''}`} alt="arrow" />
          </button>
          <div className="about-section-content">
            <animated.p style={flexibiliteStyle}>{ad.flexibilite}</animated.p>
          </div>
        </div>

        <div className="about-section">
          <button className="about-section-header" onClick={() => setRespectVisible(!isRespectVisible)}>
           <h2>Respect</h2> 
            <img src={arrowSvg} className={`ad-arrow ${isRespectVisible ? 'up' : ''}`} alt="arrow" />
          </button>
          <div className="about-section-content">
            <animated.p style={respectStyle}>{ad.respect}</animated.p>
          </div>
        </div>

        <div className="about-section">
          <button className="about-section-header" onClick={() => setServiceVisible(!isServiceVisible)}>
            <h2>Service</h2>
            <img src={arrowSvg} className={`ad-arrow ${isServiceVisible ? 'up' : ''}`} alt="arrow" />
          </button>
          <div className="about-section-content">
            <animated.p style={serviceStyle}>{ad.service}</animated.p>
          </div>
        </div>

        <div className="about-section">
          <button className="about-section-header" onClick={() => setSecuriteVisible(!isSecuriteVisible)}>
            <h2>Sécurité</h2>
            <img src={arrowSvg} className={`ad-arrow ${isSecuriteVisible ? 'up' : ''}`} alt="arrow" />
          </button>
          <div className="about-section-content">
            <animated.p style={securiteStyle}>{ad.securite}</animated.p>
          </div>
        </div>
        </div>

      </div>
    </>
  );
}

export default About;