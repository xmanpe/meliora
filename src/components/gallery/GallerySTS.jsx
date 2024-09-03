import React, { useState } from "react";
import './Gallery.scss'

import ImageModal from "../imageModal/ImageModal";

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

import h27 from '../../images/meliora/foto/sts/adds/tambah1.jpeg';
import h28 from '../../images/meliora/foto/sts/adds/tambah2.jpeg';
import h29 from '../../images/meliora/foto/sts/adds/tambah3.jpeg';
import h30 from '../../images/meliora/foto/sts/adds/tambah4.jpeg';
import h31 from '../../images/meliora/foto/sts/adds/tambah5.jpeg';
import h32 from '../../images/meliora/foto/sts/adds/tambah6.jpeg';
import h33 from '../../images/meliora/foto/sts/adds/tambah7.jpeg';
import h34 from '../../images/meliora/foto/sts/adds/tambah8.jpeg';
import h35 from '../../images/meliora/foto/sts/adds/tambah9.jpeg';
import h36 from '../../images/meliora/foto/sts/adds/tambah10.jpeg';
import h37 from '../../images/meliora/foto/sts/adds/tambah11.jpeg';
import h38 from '../../images/meliora/foto/sts/adds/tambah12.jpeg';
import h39 from '../../images/meliora/foto/sts/adds/tambah13.jpeg';
import h40 from '../../images/meliora/foto/sts/adds/tambah14.jpeg';
import h41 from '../../images/meliora/foto/sts/adds/tambah15.jpeg';
import h42 from '../../images/meliora/foto/sts/adds/tambah16.jpeg';
import h43 from '../../images/meliora/foto/sts/adds/tambah17.jpeg';
import h44 from '../../images/meliora/foto/sts/adds/tambah18.jpeg';

const Sts = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h23, h24, h25, h2, h26, h27, h28, h29, h30, h31, h32, h33, h34, h35, h36, h37, h38, h39, h40, h41, h42, h43, h44];

const GallerySTS = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const currentIndex = Sts.indexOf(currentImage);
    if (currentIndex < Sts.length - 1) {
      setCurrentImage(Sts[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = Sts.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(Sts[currentIndex - 1]);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className='galeri-main'>
      {Sts.map((image, index) => (
        <div
          key={index}
          className="each-photo"
          onClick={() => openModal(image)}
        >
          <img src={image} alt="" />
        </div>
      ))}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={currentImage}
        onPrev={prevImage}
        onNext={nextImage}
        onSelectImage={selectImage}
        images={Sts}
      />
    </div>
  );
};

export default GallerySTS;