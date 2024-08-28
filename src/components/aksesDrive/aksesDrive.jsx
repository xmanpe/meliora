import React from 'react';
import './aksesDrive.scss';

import DriveIcon from "../../images/meliora/icon/download-drive-icon.png";

function AksesDrive({ background, href }) {
  return (
    <div className='akses_drive_container'>
      <div className="hariHariOMB__aksesBox" style={{ background }}>
        <div>
          <p>Mau lihat semua dokumentasi?</p>
          <a href={href} target='_blank' rel="noopener noreferrer" className="aksesDriveDiv">
            <img src={DriveIcon} alt="Drive Icon" />
            <span>Akses <i>Drive</i></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AksesDrive;
