import React from 'react';
import Error404 from '../assets/404.png';

const NotFoundPage = () => {
  return (
    <div className='errorpage'>
        <img src={Error404} alt="404" style={{ maxWidth: '100%', height: 'auto' }} />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <a href="/">Retourner à la page d'accueil</a>
    </div>
  );
}

export default NotFoundPage;
