import React, { useState } from 'react';
import arrowSvg from '../assets/arrow.svg';
import '../styles/Collapse.css'; 

function Collapse({ items, customClass1, customClass2 }) {
  const [isTextVisible, setTextVisible] = useState(false);

  return (
    <div>
      {items.map((item, index) => (
        <div className="item" key={index}>
          <button
            className={customClass1}
            onClick={() => setTextVisible(!isTextVisible)}
          >
            {item.title}
            <img
              src={arrowSvg}
              className={`ad-arrow ${isTextVisible ? 'up' : ''}`}
              alt="arrow"
            />
          </button>

          <div className={`${customClass2} ${isTextVisible ? 'visible' : ''}`}>
            <div className={`description ${isTextVisible ? "content show" : "content"}`}> 
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapse;
