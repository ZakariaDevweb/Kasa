import React, { useState } from 'react';
import arrowSvg from '../assets/arrow.svg';

import Collapse from './Collapse.jsx';

function About({ ad = {
  flexibilite: "Les annonces postés sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
  respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
  service: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
  securite: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
} }) {
  const [isFlexibiliteVisible, setFlexibiliteVisible] = useState(false);
  const [isRespectVisible, setRespectVisible] = useState(false);
  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isSecuriteVisible, setSecuriteVisible] = useState(false);

  return (
    <>
      <div className='_Body'>
        <div className="hero2"></div>
        <div className="about-container">
          <div className="about-section">
            <Collapse
              items={[
                {
                  title: 'Flexibilité',
                  description: ad.flexibilite,
                },
              ]}
              customClass1={`about-section-header ${isFlexibiliteVisible ? 'expanded' : ''}`}
              customClass2={`about-section-content ${isFlexibiliteVisible ? 'visible' : ''}`}
              onClick={() => setFlexibiliteVisible(!isFlexibiliteVisible)}
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
              customClass1={`about-section-header ${isRespectVisible ? 'expanded' : ''}`}
              customClass2={`about-section-content ${isRespectVisible ? 'visible' : ''}`}
              onClick={() => setRespectVisible(!isRespectVisible)}
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
              customClass1={`about-section-header ${isServiceVisible ? 'expanded' : ''}`}
              customClass2={`about-section-content ${isServiceVisible ? 'visible' : ''}`}
              onClick={() => setServiceVisible(!isServiceVisible)}
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
              customClass1={`about-section-header ${isSecuriteVisible ? 'expanded' : ''}`}
              customClass2={`about-section-content ${isSecuriteVisible ? 'visible' : ''}`}
              onClick={() => setSecuriteVisible(!isSecuriteVisible)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
