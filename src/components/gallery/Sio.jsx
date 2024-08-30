import React, { useState } from 'react';
import './gridgaleri.scss';

import sio1 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Allison_Edited_2.jpg";
import sio2 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Salman_6.jpg";
import sio3 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Salman_9.jpg";
import sio4 from "../../images/meliora/foto/SIO/SIO_Andrew Su_ 8.jpg";
import sio5 from "../../images/meliora/foto/SIO/SIO_Baskara_Rether_5.jpg";
import sio6 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_7.jpg";
import sio7 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_2.jpg";
import sio8 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_9.jpg";
import sio9 from "../../images/meliora/foto/SIO/SIO_Maria Cahaya_2.jpg";
import sio10 from "../../images/meliora/foto/SIO/SIO_Qhedy_2.jpg";
import sio11 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_3.jpg";
import sio12 from "../../images/meliora/foto/SIO/SIO_Steven Hans_5.jpg";
import sio13 from "../../images/meliora/foto/SIO/SIO_Steven Hans_8.jpg";
import sio14 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_5.jpg";
import sio15 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_3.jpg";
import sio16 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_5.jpg";
import sio17 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_8.jpg";
import sio18 from "../../images/meliora/foto/SIO/SIO_Baskara_Rether_3.jpg";
import sio19 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_1.jpg";
import sio20 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_5.jpg";
import sio21 from "../../images/meliora/foto/SIO/SIO_Qhedy_1.jpg";
import sio22 from "../../images/meliora/foto/SIO/SIO_Qhedy_5.jpg";
import sio23 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_3.jpg";
import sio24 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_8.jpg";
import sio25 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_10.jpg";
import sio26 from "../../images/meliora/foto/SIO/SIO_Steven Hans_1.jpg";

const sio = [
  sio1, sio2, sio3, sio4, sio5, sio6, sio7, sio8,
  sio9, sio10, sio11, sio12, sio13, sio14, sio15,
  sio16, sio17, sio18, sio19, sio20, sio21, sio22,
  sio23, sio24, sio25, sio26,
];

function Modal({ isOpen, onClose, image, onThumbnailClick }) {
    if (!isOpen) return null;
    
    const currentIndex = sio.indexOf(image);

    const thumbnails = sio.slice(currentIndex + 1, currentIndex + 6);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-image-container">
            <img src={image} alt="" className='modal-image' />
          </div>
          <div className="thumbnail-container">
            {thumbnails.map((thumbImage, index) => ( 
              <img
                key={index}
                src={thumbImage}
                alt=""
                className='thumbnail'
                onClick={() => onThumbnailClick(thumbImage)}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

function Sio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const ThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='grid-galeri'>
      {sio.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          onClick={() => openModal(image)}
          className="grid-image"
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
        onThumbnailClick={ThumbnailClick}
      />
    </div>
  );
}

export default Sio;
