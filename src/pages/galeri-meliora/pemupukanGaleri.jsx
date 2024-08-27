import React, { useState } from "react";
import "./masonrygaleri.scss";

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

import close from "../../images/meliora/icon/cross.png";

function pemupukanGaleri() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFoto, setSelectedFoto] = useState(0);

  const fotos = [
    mupuk5,
    mupuk2,
    mupuk3,
    mupuk4,
    mupuk6,
    mupuk7,
    mupuk8,
    mupuk9,
    mupuk10,
    mupuk11,
    mupuk12,
    mupuk13,
    mupuk14,
    mupuk17,
    mupuk18,
    mupuk19,
    mupuk20,
    mupuk21,
    mupuk22,
    mupuk23,
    mupuk24,
    mupuk25,
    mupuk26,
    mupuk1,
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
        <img src={mupuk5} onClick={() => fotoKlik(0)}></img>
      </div>
      <div className="big">
        <img src={mupuk2} onClick={() => fotoKlik(1)}></img>
      </div>
      <div>
        <img src={mupuk3} onClick={() => fotoKlik(2)}></img>
      </div>
      <div>
        <img src={mupuk4} onClick={() => fotoKlik(3)}></img>
      </div>
      <div>
        <img src={mupuk6} onClick={() => fotoKlik(4)}></img>
      </div>
      <div className="wide">
        <img src={mupuk7} onClick={() => fotoKlik(5)}></img>
      </div>
      <div>
        <img src={mupuk8} onClick={() => fotoKlik(6)}></img>
      </div>
      <div className="tall">
        <img src={mupuk9} onClick={() => fotoKlik(7)}></img>
      </div>
      <div className="tall">
        <img src={mupuk10} onClick={() => fotoKlik(8)}></img>
      </div>
      <div>
        <img src={mupuk11} onClick={() => fotoKlik(9)}></img>
      </div>
      <div>
        <img src={mupuk12} onClick={() => fotoKlik(10)}></img>
      </div>
      <div>
        <img src={mupuk13} onClick={() => fotoKlik(11)}></img>
      </div>
      <div>
        <img src={mupuk15} onClick={() => fotoKlik(12)}></img>
      </div>
      <div className="big">
        <img src={mupuk16} onClick={() => fotoKlik(13)}></img>
      </div>
      <div className="wide">
        <img src={mupuk14} onClick={() => fotoKlik(14)}></img>
      </div>
      <div>
        <img src={mupuk17} onClick={() => fotoKlik(15)}></img>
      </div>
      <div>
        <img src={mupuk18} onClick={() => fotoKlik(16)}></img>
      </div>
      <div>
        <img src={mupuk19} onClick={() => fotoKlik(17)}></img>
      </div>
      <div className="wide">
        <img
          src={mupuk20}
          onClick={() => fotoKlik(18)}
          className="sio-19"
        ></img>
      </div>
      <div>
        <img src={mupuk21} onClick={() => fotoKlik(19)}></img>
      </div>
      <div>
        <img src={mupuk22} onClick={() => fotoKlik(20)}></img>
      </div>
      <div>
        <img src={mupuk23} onClick={() => fotoKlik(21)}></img>
      </div>
      <div className="tall">
        <img src={mupuk24} onClick={() => fotoKlik(22)}></img>
      </div>
      <div className="tall">
        <img src={mupuk25} onClick={() => fotoKlik(23)}></img>
      </div>
      <div>
        <img src={mupuk26} onClick={() => fotoKlik(24)}></img>
      </div>
      <div>
        <img src={mupuk1} onClick={() => fotoKlik(25)}></img>
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

export default pemupukanGaleri;
