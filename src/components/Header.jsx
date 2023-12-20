import React from 'react';
import KasaLogo from '../assets/kasa.svg';


const Header = () => (
    <header className="header">
      <img src={KasaLogo}  alt="Kasa Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À Propos</a></li>
        </ul>
      </nav>
    </header>
  );

  export default Header; 
