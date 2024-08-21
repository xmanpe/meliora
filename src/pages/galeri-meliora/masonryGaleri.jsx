import React, { useState } from "react";
import "./masonrygaleri.scss";

import foto1 from "../../images/meliora/foto/images-2.jpeg";
import foto2 from "../../images/meliora/foto/images-3.jpeg";
import foto3 from "../../images/meliora/foto/images.jpeg";
import foto4 from "../../images/meliora/foto/pexels-pixabay-15239.jpg";
import foto5 from "../../images/meliora/foto/images-2.jpeg";
import foto6 from "../../images/meliora/foto/images-3.jpeg";
import foto7 from "../../images/meliora/foto/images.jpeg";
import foto8 from "../../images/meliora/foto/pexels-pixabay-15239.jpg";
import foto9 from "../../images/meliora/foto/fixed-ratio.png.webp";
import foto10 from "../../images/meliora/foto/premium_photo-1701693533734-bc279bdd0c80.webp";

import close from "../../images/meliora/icon/cross.png";

function masonryGaleri() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFoto, setSelectedFoto] = useState(0);

  const fotos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto1,
    foto2,
    foto5,
    foto6,
    foto3,
    foto4,
  ];

  const fotoKlik = (index) => {
    setSelectedFoto(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="galeri-main">
      <div className="wide">
        <img src={foto1} onClick={() => fotoKlik(0)}></img>
      </div>
      <div className="big">
        <img src={foto2} onClick={() => fotoKlik(1)}></img>
      </div>
      <div>
        <img src={foto3} onClick={() => fotoKlik(2)}></img>
      </div>
      <div>
        <img src={foto4} onClick={() => fotoKlik(3)}></img>
      </div>
      <div>
        <img src={foto5} onClick={() => fotoKlik(4)}></img>
      </div>
      <div className="wide">
        <img src={foto6} onClick={() => fotoKlik(5)}></img>
      </div>
      <div>
        <img src={foto7} onClick={() => fotoKlik(6)}></img>
      </div>
      <div className="tall">
        <img src={foto8} onClick={() => fotoKlik(7)}></img>
      </div>
      <div className="tall">
        <img src={foto9} onClick={() => fotoKlik(8)}></img>
      </div>
      <div>
        <img src={foto10} onClick={() => fotoKlik(9)}></img>
      </div>
      <div>
        <img src={foto1} onClick={() => fotoKlik(10)}></img>
      </div>
      <div>
        <img src={foto2} onClick={() => fotoKlik(11)}></img>
      </div>
      <div>
        <img src={foto3} onClick={() => fotoKlik(12)}></img>
      </div>
      <div className="big">
        <img src={foto4} onClick={() => fotoKlik(13)}></img>
      </div>
      <div className="wide">
        <img src={foto5} onClick={() => fotoKlik(14)}></img>
      </div>
      <div>
        <img src={foto6} onClick={() => fotoKlik(15)}></img>
      </div>
      <div>
        <img src={foto7} onClick={() => fotoKlik(16)}></img>
      </div>
      <div>
        <img src={foto8} onClick={() => fotoKlik(17)}></img>
      </div>
      <div className="wide">
        <img src={foto9} onClick={() => fotoKlik(18)}></img>
      </div>
      <div>
        <img src={foto10} onClick={() => fotoKlik(19)}></img>
      </div>
      <div>
        <img src={foto1} onClick={() => fotoKlik(20)}></img>
      </div>
      <div>
        <img src={foto2} onClick={() => fotoKlik(21)}></img>
      </div>
      <div className="tall">
        <img src={foto5} onClick={() => fotoKlik(22)}></img>
      </div>
      <div className="tall">
        <img src={foto6} onClick={() => fotoKlik(23)}></img>
      </div>
      <div>
        <img src={foto3} onClick={() => fotoKlik(24)}></img>
      </div>
      <div>
        <img src={foto4} onClick={() => fotoKlik(25)}></img>
      </div>

      {/* modal */}
      {isOpen && (
        <div className="modal" id="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={closeModal}>
                <img src={close}></img>
              </span>
            </div>
            <div className="modal-body">
              <div className="carousel">
                <div className="slide-foto">
                  <img
                    src={fotos[selectedFoto]}
                    alt={`Selected Foto ${selectedFoto + 1}`}
                    className="fo-to"
                  />
                </div>
                <div className="thumb-foto">
                  {fotos
                    .slice(selectedFoto, selectedFoto + 6)
                    .map((foto, index) => (
                      <div key={index} className="thumb-item">
                        <img
                          src={foto}
                          alt={`Foto ${selectedFoto + index + 1}`}
                          onClick={() => setSelectedFoto(selectedFoto + index)}
                          className="thumb-image"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default masonryGaleri;
