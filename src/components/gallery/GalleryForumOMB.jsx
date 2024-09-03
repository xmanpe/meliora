import React, { useState } from "react";
import { motion } from "framer-motion";
import './Gallery.scss';

import ImageModal from "../imageModal/ImageModal";

import h1 from '../../images/meliora/foto/forum/tambah1.jpeg';
import h2 from '../../images/meliora/foto/forum/tambah2.jpeg';
import h3 from '../../images/meliora/foto/forum/tambah3.jpeg';
import h4 from '../../images/meliora/foto/forum/tambah4.jpeg';
import h5 from '../../images/meliora/foto/forum/tambah5.jpeg';
import h6 from '../../images/meliora/foto/forum/tambah6.jpeg';
import h7 from '../../images/meliora/foto/forum/tambah7.jpeg';
import h8 from '../../images/meliora/foto/forum/tambah8.jpeg';
import h9 from '../../images/meliora/foto/forum/tambah9.jpeg';
import h10 from '../../images/meliora/foto/forum/tambah10.jpeg';
import h11 from '../../images/meliora/foto/forum/tambah11.jpeg';
import h12 from '../../images/meliora/foto/forum/tambah12.jpeg';
import h13 from '../../images/meliora/foto/forum/tambah13.jpeg';
import h14 from '../../images/meliora/foto/forum/tambah14.jpeg';
import h15 from '../../images/meliora/foto/forum/tambah15.jpeg';
import h16 from '../../images/meliora/foto/forum/tambah16.jpeg';
import h17 from '../../images/meliora/foto/forum/tambah17.jpeg';
import h18 from '../../images/meliora/foto/forum/tambah18.jpeg';
import h19 from '../../images/meliora/foto/forum/tambah19.jpeg';
import h20 from '../../images/meliora/foto/forum/tambah20.jpeg';
import h21 from '../../images/meliora/foto/forum/tambah21.jpeg';
import h22 from '../../images/meliora/foto/forum/tambah22.jpeg';
import h23 from '../../images/meliora/foto/forum/tambah23.jpeg';
import h24 from '../../images/meliora/foto/forum/tambah24.jpeg';
import h25 from '../../images/meliora/foto/forum/tambah25.jpeg';
import h26 from '../../images/meliora/foto/forum/tambah26.jpeg';
import h27 from '../../images/meliora/foto/forum/tambah27.jpeg';
import h28 from '../../images/meliora/foto/forum/tambah28.jpeg';
import h29 from '../../images/meliora/foto/forum/tambah29.jpeg';
import h30 from '../../images/meliora/foto/forum/tambah30.jpeg';
import h31 from '../../images/meliora/foto/forum/tambah31.jpeg';
import h32 from '../../images/meliora/foto/forum/tambah32.jpeg';
import h33 from '../../images/meliora/foto/forum/tambah33.jpeg';
import h34 from '../../images/meliora/foto/forum/tambah34.jpeg';
import h35 from '../../images/meliora/foto/forum/tambah35.jpeg';
import h36 from '../../images/meliora/foto/forum/tambah36.jpeg';
import h37 from '../../images/meliora/foto/forum/tambah37.jpeg';
import h38 from '../../images/meliora/foto/forum/tambah38.jpeg';
import h39 from '../../images/meliora/foto/forum/tambah39.jpeg';
import h40 from '../../images/meliora/foto/forum/tambah40.jpeg';
import h41 from '../../images/meliora/foto/forum/tambah41.jpeg';
import h42 from '../../images/meliora/foto/forum/tambah42.jpeg';
import h43 from '../../images/meliora/foto/forum/tambah43.jpeg';
import h44 from '../../images/meliora/foto/forum/tambah44.jpeg';
import h45 from '../../images/meliora/foto/forum/tambah45.jpeg';
import h46 from '../../images/meliora/foto/forum/tambah46.jpeg';
import h47 from '../../images/meliora/foto/forum/tambah47.jpeg';
import h48 from '../../images/meliora/foto/forum/tambah48.jpeg';
import h49 from '../../images/meliora/foto/forum/tambah49.jpeg';
import h50 from '../../images/meliora/foto/forum/tambah50.jpeg';
import h51 from '../../images/meliora/foto/forum/tambah51.jpeg';
import h52 from '../../images/meliora/foto/forum/tambah52.jpeg';
import h53 from '../../images/meliora/foto/forum/tambah53.jpeg';
import h54 from '../../images/meliora/foto/forum/tambah54.jpeg';
import h55 from '../../images/meliora/foto/forum/tambah55.jpeg';
import h56 from '../../images/meliora/foto/forum/tambah56.jpeg';
import h57 from '../../images/meliora/foto/forum/tambah57.jpeg';


const forumOMB = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h23, h24, h25, h27, h28, h30, h31, h32, h33, h34, h35, h36, h37, h38, h39, h40, h42, h43, h44, h45, h46, h47, h48, h49, h50, h51, h52, h53, h54, h55, h56];

function GalleryForumOMB() {
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
    const currentIndex = forumOMB.indexOf(currentImage);
    if (currentIndex < forumOMB.length - 1) {
      setCurrentImage(forumOMB[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = forumOMB.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(forumOMB[currentIndex - 1]);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className='galeri-main'>
      {forumOMB.map((image, index) => (
        <motion.div
          key={index}
          className="each-photo"
          onClick={() => openModal(image)}
          initial="hidden"
          animate="visible"
          variants={photoVariants}
          custom={index}
        >
          <img src={image} alt="" />
        </motion.div>
      ))}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={currentImage}
        onPrev={prevImage}
        onNext={nextImage}
        onSelectImage={selectImage}
        images={forumOMB}
      />
    </div>
  );
}

export default GalleryForumOMB;
