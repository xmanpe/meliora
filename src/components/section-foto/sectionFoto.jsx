import React, { useContext, useState } from "react";
import "./sectionfoto.scss";

import { DivisiContext } from "../../pages/FotoDivisi";
import sectionFotoData from "./DataSectionFoto";
import ImageModal from "../imageModal/ImageModal";

const SectionFoto = () => {
  const { activeIndex } = useContext(DivisiContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Extract images for the active divisi
  const currentDivisiPhotos = sectionFotoData["FOTO"][activeIndex];
  const images = Object.values(currentDivisiPhotos);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex < images.length - 1) {
      setCurrentImage(images[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(images[currentIndex - 1]);
    }
  };

  return (
    <div className="container">
      <h1>Dokumentasi Divisi</h1>
      <div className="wrapper">
        {currentDivisiPhotos && (
          <>
            {Object.keys(currentDivisiPhotos).map((key, index) => (
              <div 
                className="image-parent"
                key={index}
                onClick={() => openModal(currentDivisiPhotos[key])}
              >
                <img src={currentDivisiPhotos[key]} alt={`Foto ${index + 1}`} />
              </div>
            ))}
          </>
        )}
      </div>
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={currentImage}
        onPrev={prevImage}
        onNext={nextImage}
        onSelectImage={(image) => setCurrentImage(image)}
        images={images}
      />
    </div>
  );
};

export default SectionFoto;
