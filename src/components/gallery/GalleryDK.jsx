import React, { useState } from "react";
import "./Gallery.scss";

import ImageModal from "../imageModal/ImageModal";

import h1 from '../../images/meliora/foto/dibalik/tambah1.jpeg';
import h2 from '../../images/meliora/foto/dibalik/tambah2.jpeg';
import h3 from '../../images/meliora/foto/dibalik/tambah3.jpeg';
import h4 from '../../images/meliora/foto/dibalik/tambah4.jpeg';
import h5 from '../../images/meliora/foto/dibalik/tambah5.jpeg';
import h6 from '../../images/meliora/foto/dibalik/tambah6.jpeg';
import h7 from '../../images/meliora/foto/dibalik/tambah7.jpeg';
import h8 from '../../images/meliora/foto/dibalik/tambah8.jpeg';
import h9 from '../../images/meliora/foto/dibalik/tambah9.jpeg';
import h10 from '../../images/meliora/foto/dibalik/tambah10.jpeg';
import h11 from '../../images/meliora/foto/dibalik/tambah11.jpeg';
import h12 from '../../images/meliora/foto/dibalik/tambah12.jpeg';
import h13 from '../../images/meliora/foto/dibalik/tambah13.jpeg';
import h14 from '../../images/meliora/foto/dibalik/tambah14.jpeg';
import h15 from '../../images/meliora/foto/dibalik/tambah15.jpeg';
import h16 from '../../images/meliora/foto/dibalik/tambah16.jpeg';
import h17 from '../../images/meliora/foto/dibalik/tambah17.jpeg';
import h18 from '../../images/meliora/foto/dibalik/tambah18.jpeg';
import h19 from '../../images/meliora/foto/dibalik/tambah19.jpeg';
import h20 from '../../images/meliora/foto/dibalik/tambah20.jpeg';
import h21 from '../../images/meliora/foto/dibalik/tambah21.jpeg';
import h22 from '../../images/meliora/foto/dibalik/tambah22.jpeg';
import h25 from '../../images/meliora/foto/dibalik/tambah25.jpeg';
import h23 from '../../images/meliora/foto/dibalik/tambah23.jpeg';
import h24 from '../../images/meliora/foto/dibalik/tambah24.jpeg';
import h26 from '../../images/meliora/foto/dibalik/tambah26.jpeg';
import h27 from '../../images/meliora/foto/dibalik/tambah27.jpeg';
import h28 from '../../images/meliora/foto/dibalik/tambah28.jpeg';
import h29 from '../../images/meliora/foto/dibalik/tambah29.jpeg';
import h30 from '../../images/meliora/foto/dibalik/tambah30.jpeg';
import h31 from '../../images/meliora/foto/dibalik/tambah31.jpeg';
import h32 from '../../images/meliora/foto/dibalik/tambah32.jpeg';
import h33 from '../../images/meliora/foto/dibalik/tambah33.jpeg';
import h34 from '../../images/meliora/foto/dibalik/tambah34.jpeg';
import h35 from '../../images/meliora/foto/dibalik/tambah35.jpeg';
import h36 from '../../images/meliora/foto/dibalik/tambah36.jpeg';
import h37 from '../../images/meliora/foto/dibalik/tambah37.jpeg';
import h38 from '../../images/meliora/foto/dibalik/tambah38.jpeg';
import h39 from '../../images/meliora/foto/dibalik/tambah39.jpeg';
import h40 from '../../images/meliora/foto/dibalik/tambah40.jpeg';
import h41 from '../../images/meliora/foto/dibalik/tambah41.jpeg';
import h42 from '../../images/meliora/foto/dibalik/tambah42.jpeg';
import h43 from '../../images/meliora/foto/dibalik/tambah43.jpeg';


const dk = [
    h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20,
    h21, h22, h23, h24, h25, h26, h27, h28, h29, h30, h31, h32, h33, h34, h35, h36, h37, h38,
    h39, h40, h41, h42, h43
];
  

function GalleryDK() {
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
    const currentIndex = dk.indexOf(currentImage);
    if (currentIndex < dk.length - 1) {
      setCurrentImage(dk[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = dk.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(dk[currentIndex - 1]);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className='galeri-main'>
      {dk.map((image, index) => (
        <div 
          className="each-photo"
          key={index}
          onClick={() => openModal(image)}
          >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
          />
        </div>
      ))}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={currentImage}
        onPrev={prevImage}
        onNext={nextImage}
        onSelectImage={selectImage}
        images={dk}
      />
    </div>
  );
}

export default GalleryDK;