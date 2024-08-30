import React, { useState } from 'react';
import "./gridgaleri.scss";

import mupuk1 from "../../images/meliora/foto/pemupukan/Andrew Su_Hari Pemupukan (1).jpg";
import mupuk2 from "../../images/meliora/foto/pemupukan/Andrew Su_Hari Pemupukan (7).jpg";
import mupuk3 from "../../images/meliora/foto/pemupukan/Andrew Su_Hari Pemupukan (8).jpg";
import mupuk4 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_1.jpg";
import mupuk5 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_2.jpg";
import mupuk6 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_3.jpg";
import mupuk7 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_4.jpg";
import mupuk8 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_5.jpg";
import mupuk9 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_6.jpg";
import mupuk10 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_7.jpg";
import mupuk11 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Cahaya_4.jpg";
import mupuk12 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Cahaya_6.jpg";
import mupuk13 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Delon_3.jpg";
import mupuk14 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Delon_4.jpg";
import mupuk15 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Diana Angyulia_7.jpg";
import mupuk16 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Diana Angyulia_9.jpg";
import mupuk17 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_1.jpg";
import mupuk18 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_2.jpg";
import mupuk19 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_4.jpg";
import mupuk20 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_9.jpg";
import mupuk21 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Salman_5.jpg";
import mupuk22 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Salman_6.jpg";
import mupuk23 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Salman_7.jpg";
import mupuk24 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Steven Hans_6.jpg";
import mupuk25 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Valentino_1.jpg";
import mupuk26 from "../../images/meliora/foto/pemupukan/Qhedyzya Ricardiane_Hari Pemukupan_5.jpg";

const mupuk = [
    mupuk1, mupuk2, mupuk3, mupuk4, mupuk5, mupuk6, mupuk7, mupuk8,
    mupuk9, mupuk10, mupuk11, mupuk12, mupuk13, mupuk14, mupuk15,
    mupuk16, mupuk17, mupuk18, mupuk19, mupuk20, mupuk21, mupuk22,
    mupuk23, mupuk24, mupuk25, mupuk26,
  ];
  function Modal({ isOpen, onClose, image, onThumbnailClick }) {
    if (!isOpen) return null;
    
    const currentIndex = mupuk.indexOf(image);

    const thumbnails = mupuk.slice(currentIndex + 1, currentIndex + 6);

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

function PemupukanFoto() {
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
      {mupuk.map((image, index) => (
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

export default PemupukanFoto;