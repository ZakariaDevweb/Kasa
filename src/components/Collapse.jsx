import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import arrowSvg from '../assets/arrow.svg';

function Collapse({ items, customClass1, customClass2 }) {

    const [isTextVisible, setTextVisible] = useState(false);


    const descriptionStyle = useSpring({
        from: { opacity: 0, height: 0 },
        to: {
            opacity: isTextVisible ? 1 : 0,
            height: isTextVisible ? 'auto' : 0
        },
    });

    return (
        <div>
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <button className={customClass1} onClick={() => setTextVisible(!isTextVisible)}>
                        {item.title}
                        <img src={arrowSvg} className={`ad-arrow ${isTextVisible ? 'up' : ''}`} alt="arrow" />
                    </button>

                    <div className={customClass2}>
                        <animated.div style={descriptionStyle}>{item.description}</animated.div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default Collapse;