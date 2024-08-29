import React, { useState } from "react";
import "./masonrygaleri.scss";

//sio
import sio1 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Allison_Edited_2.jpg"
import sio2 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Salman_6.jpg"
import sio3 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Salman_9.jpg"
import sio4 from "../../images/meliora/foto/SIO/SIO_Andrew Su_ 8.jpg"
import sio5 from "../../images/meliora/foto/SIO/SIO_Baskara_Rether_5.jpg"
import sio6 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_7.jpg"
import sio7 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_2.jpg"
import sio8 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_9.jpg"
import sio9 from "../../images/meliora/foto/SIO/SIO_Maria Cahaya_2.jpg"
import sio10 from "../../images/meliora/foto/SIO/SIO_Qhedy_2.jpg"
import sio11 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_3.jpg"
import sio12 from "../../images/meliora/foto/SIO/SIO_Steven Hans_5.jpg"
import sio13 from "../../images/meliora/foto/SIO/SIO_Steven Hans_8.jpg"
import sio14 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_5.jpg"
import sio15 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_3.jpg"
import sio16 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_5.jpg"
import sio17 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_8.jpg"
import sio18 from "../../images/meliora/foto/SIO/SIO_Baskara_Rether_3.jpg"
import sio19 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_1.jpg"
import sio20 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_5.jpg"
import sio21 from "../../images/meliora/foto/SIO/SIO_Qhedy_1.jpg"
import sio22 from "../../images/meliora/foto/SIO/SIO_Qhedy_5.jpg"
import sio23 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_3.jpg"
import sio24 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_8.jpg"
import sio25 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_10.jpg"
import sio26 from "../../images/meliora/foto/SIO/SIO_Steven Hans_1.jpg"

import close from "../../images/meliora/icon/cross.png";

function masonryGaleri() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFoto, setSelectedFoto] = useState(0);

  const fotos = [
    sio1,
    sio2,
    sio3,
    sio4,
    sio5,
    sio6,
    sio7,
    sio8,
    sio9,
    sio10,
    sio11,
    sio12,
    sio13,
    sio14,
    sio15,
    sio16,
    sio17,
    sio18,
    sio19,
    sio20,
    sio21,
    sio22,
    sio23,
    sio24,
    sio25,
    sio26
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
      <div>
        <img src={sio1} onClick={() => fotoKlik(0)}></img>
      </div>
      <div>
        <img src={sio6} onClick={() => fotoKlik(1)}></img>
      </div>
      <div>
        <img src={sio3} onClick={() => fotoKlik(2)}></img>
      </div>
      <div>
        <img src={sio4} onClick={() => fotoKlik(3)}></img>
      </div>
      <div>
        <img src={sio5} onClick={() => fotoKlik(4)}></img>
      </div>
      <div>
        <img src={sio2} onClick={() => fotoKlik(5)}></img>
      </div>
      <div>
        <img src={sio7} onClick={() => fotoKlik(6)}></img>
      </div>
      <div>
        <img src={sio8} onClick={() => fotoKlik(7)}></img>
      </div>
      <div>
        <img src={sio10} onClick={() => fotoKlik(8)}></img>
      </div>
      <div>
        <img src={sio9} onClick={() => fotoKlik(9)}></img>
      </div>
      <div>
        <img src={sio11} onClick={() => fotoKlik(10)}></img>
      </div>
      <div>
        <img src={sio12} onClick={() => fotoKlik(11)}></img>
      </div>
      <div>
        <img src={sio13} onClick={() => fotoKlik(12)}></img>
      </div>
      <div>
        <img src={sio14} onClick={() => fotoKlik(13)}></img>
      </div>
      <div>
        <img src={sio15} onClick={() => fotoKlik(14)}></img>
      </div>
      <div>
        <img src={sio16} onClick={() => fotoKlik(15)}></img>
      </div>
      <div>
        <img src={sio17} onClick={() => fotoKlik(16)}></img>
      </div>
      <div>
        <img src={sio18} onClick={() => fotoKlik(17)}></img>
      </div>
      <div>
        <img src={sio19} onClick={() => fotoKlik(18)} className="sio-19"></img>
      </div>
      <div>
        <img src={sio20} onClick={() => fotoKlik(19)}></img>
      </div>
      <div>
        <img src={sio21} onClick={() => fotoKlik(20)}></img>
      </div>
      <div>
        <img src={sio22} onClick={() => fotoKlik(21)}></img>
      </div>
      <div className="tall">
        <img src={sio23} onClick={() => fotoKlik(22)}></img>
      </div>
      <div className="tall">
        <img src={sio24} onClick={() => fotoKlik(23)}></img>
      </div>
      <div>
        <img src={sio25} onClick={() => fotoKlik(24)}></img>
      </div>
      <div>
        <img src={sio26} onClick={() => fotoKlik(25)}></img>
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
