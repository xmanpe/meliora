import React, { useState } from "react";
import "./masonrygaleri.scss";

//h
import h21 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Allison-86.jpg";
import h22 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Allison-130.jpg";
import h23 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-7.jpg";
import h24 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-67.jpg";
import h25 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-166.jpg";
import h26 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-151.jpg";
import h27 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-134.jpg";
import h28 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-109.jpg";
import h29 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Maria Cahaya-8.jpg";
import h210 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Maria Cahaya-45.jpg";
import h211 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_10.jpg";
import h212 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_11.jpg";
import h213 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_16.jpg";
import h214 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_30.jpg";
import h215 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_62.jpg";
import h216 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_9.jpg";
import h217 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_130.jpg";
import h218 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_201.jpg";
import h219 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_221.jpg";
import h220 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_24.jpg";
import h221 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_268.jpg";
import h222 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_280.jpg";
import h225 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_300.jpg";
import h223 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_310.jpg";
import h224 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_60.jpg";
import h226 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-91.jpg";

import close from "../../images/meliora/icon/cross.png";

function hari2Galeri() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFoto, setSelectedFoto] = useState(0);

  const fotos = [
    h21,
    h22,
    h23,
    h24,
    h25,
    h26,
    h27,
    h28,
    h29,
    h210,
    h211,
    h212,
    h213,
    h214,
    h215,
    h216,
    h217,
    h218,
    h219,
    h220,
    h221,
    h222,
    h223,
    h224,
    h225,
    h226,
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
        <img src={h21} onClick={() => fotoKlik(0)}></img>
      </div>
      <div className="big">
        <img src={h26} onClick={() => fotoKlik(1)}></img>
      </div>
      <div>
        <img src={h23} onClick={() => fotoKlik(2)}></img>
      </div>
      <div>
        <img src={h24} onClick={() => fotoKlik(3)}></img>
      </div>
      <div>
        <img src={h25} onClick={() => fotoKlik(4)}></img>
      </div>
      <div className="wide">
        <img src={h22} onClick={() => fotoKlik(5)}></img>
      </div>
      <div>
        <img src={h27} onClick={() => fotoKlik(6)}></img>
      </div>
      <div className="tall">
        <img src={h28} onClick={() => fotoKlik(7)}></img>
      </div>
      <div className="tall">
        <img src={h210} onClick={() => fotoKlik(8)}></img>
      </div>
      <div>
        <img src={h29} onClick={() => fotoKlik(9)}></img>
      </div>
      <div>
        <img src={h211} onClick={() => fotoKlik(10)}></img>
      </div>
      <div>
        <img src={h212} onClick={() => fotoKlik(11)}></img>
      </div>
      <div>
        <img src={h213} onClick={() => fotoKlik(12)}></img>
      </div>
      <div className="big">
        <img src={h214} onClick={() => fotoKlik(13)}></img>
      </div>
      <div className="wide">
        <img src={h215} onClick={() => fotoKlik(14)}></img>
      </div>
      <div>
        <img src={h216} onClick={() => fotoKlik(15)}></img>
      </div>
      <div>
        <img src={h217} onClick={() => fotoKlik(16)}></img>
      </div>
      <div>
        <img src={h218} onClick={() => fotoKlik(17)}></img>
      </div>
      <div className="wide">
        <img src={h219} onClick={() => fotoKlik(18)} className="h2-19"></img>
      </div>
      <div>
        <img src={h220} onClick={() => fotoKlik(19)}></img>
      </div>
      <div>
        <img src={h221} onClick={() => fotoKlik(20)}></img>
      </div>
      <div>
        <img src={h222} onClick={() => fotoKlik(21)}></img>
      </div>
      <div className="tall">
        <img src={h223} onClick={() => fotoKlik(22)}></img>
      </div>
      <div className="tall">
        <img src={h224} onClick={() => fotoKlik(23)}></img>
      </div>
      <div>
        <img src={h225} onClick={() => fotoKlik(24)}></img>
      </div>
      <div>
        <img src={h226} onClick={() => fotoKlik(25)}></img>
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

export default hari2Galeri;
