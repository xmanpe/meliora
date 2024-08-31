import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageModal.scss';

const ImageModal = ({ isOpen, onClose, currentImage, onPrev, onNext, images, onSelectImage }) => {
  if (!isOpen) return null;

  const currentIndex = images.indexOf(currentImage);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="modal-content"
          >
            <button onClick={onClose} className="close-button">
              <X size={24} />
            </button>

            <div className="image-container">
              <img src={currentImage} alt="Enlarged view" className="main-image" />
              <button onClick={onPrev} className="nav-button prev" disabled={currentIndex === 0}>
                <ChevronLeft size={24} />
              </button>
              <button onClick={onNext} className="nav-button next" disabled={currentIndex === images.length - 1}>
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="thumbnails-container">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`thumbnail ${img === currentImage ? 'active' : ''}`}
                  onClick={() => onSelectImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
