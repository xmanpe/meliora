import React, { useState } from "react";
import "./gridgaleri.scss";

//h
import h1 from "../../images/meliora/foto/sts/Sidang Senat Terbuka_Andrew Su-12-min.jpg";
import h2 from "../../images/meliora/foto/sts/Sidang Senat Terbuka_Andrew Su-36-min.jpg";
import h3 from "../../images/meliora/foto/sts/Sidang Senat Terbuka_Oxa-1-min.jpg";
import h4 from "../../images/meliora/foto/sts/Sidang Senat Terbuka_Oxa-4-min.jpg";
import h5 from "../../images/meliora/foto/sts/Sidang Senat Terbuka_Oxa-18-min.jpg";
import h6 from "../../images/meliora/foto/sts/Sidang Senat_Valentino_10-min.jpg";
import h7 from "../../images/meliora/foto/sts/Sidang Terbuka Senat _ Qhedyzya Ricardiane_7.jpg";
import h8 from "../../images/meliora/foto/sts/Sidang Terbuka Senat _ Qhedyzya Ricardiane_13.jpg";
import h9 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Delon_Foto Terbaik_8.jpg";
import h10 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-8.jpg";
import h11 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-12.jpg";
import h12 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-18.jpg";
import h13 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-23.jpg";
import h14 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-28.jpg";
import h15 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-51.jpg";
import h16 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-59.jpg";
import h17 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Diana Angyulia-70.jpg";
import h18 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Ravalen Virginia-10-min.jpg";
import h19 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Ravalen Virginia-18-min.jpg";
import h20 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Ravalen Virginia-27-min.jpg";
import h21 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Rether_6.jpg";
import h22 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Rether_8.jpg";
import h25 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Rether_9.jpg";
import h23 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Salman_Foto Terbaik_7-min.jpg";
import h24 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Salman_Foto Terbaik_10-min.jpg";
import h26 from "../../images/meliora/foto/sts/Sidang Terbuka Senat_Steven Hans_41.jpg";

const Sts = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h23, h24, h25, h26];

function Modal({ isOpen, onClose, image, onThumbnailClick }) {
  if (!isOpen) return null;
  
  const currentIndex = Sts.indexOf(image);

  const thumbnails = Sts.slice(currentIndex + 1, currentIndex + 6);

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

function StsGaleri() {
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
    {Sts.map((image, index) => (
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

export default StsGaleri;
