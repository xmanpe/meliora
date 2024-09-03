import React from 'react';
import './aksesDrive.scss';

import drive from '../../images/icons/folder-drive.svg';

function AksesDrive({ background, href }) {

  const handleDriveClick = (event) => {
    event.stopPropagation();
    window.open(href, '_blank');
  };

  return (
    <div className='akses-drive-container'>
      <p>Mau lihat selengkapnya?</p>
      <div className='card-button' onClick={handleDriveClick}>
        <img src={drive} alt="drive" />
        <p>Akses <i>Drive</i></p>
      </div>
    </div>
  );
}

export default AksesDrive;
