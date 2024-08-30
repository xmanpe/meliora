import React, { useState } from "react";
import "./masonrygaleri.scss";

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

import close from "../../images/meliora/icon/cross.png";

function stsGaleri() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFoto, setSelectedFoto] = useState(0);

  const fotos = [
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    h10,
    h11,
    h12,
    h13,
    h14,
    h15,
    h16,
    h17,
    h18,
    h19,
    h20,
    h21,
    h22,
    h23,
    h24,
    h25,
    h26,
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
        <img src={h1} onClick={() => fotoKlik(0)}></img>
      </div>
      <div className="big">
        <img src={h6} onClick={() => fotoKlik(1)}></img>
      </div>
      <div>
        <img src={h3} onClick={() => fotoKlik(2)}></img>
      </div>
      <div>
        <img src={h4} onClick={() => fotoKlik(3)}></img>
      </div>
      <div>
        <img src={h5} onClick={() => fotoKlik(4)}></img>
      </div>
      <div className="wide">
        <img src={h2} onClick={() => fotoKlik(5)}></img>
      </div>
      <div>
        <img src={h7} onClick={() => fotoKlik(6)}></img>
      </div>
      <div className="tall">
        <img src={h8} onClick={() => fotoKlik(7)}></img>
      </div>
      <div className="tall">
        <img src={h10} onClick={() => fotoKlik(8)}></img>
      </div>
      <div>
        <img src={h9} onClick={() => fotoKlik(9)}></img>
      </div>
      <div>
        <img src={h11} onClick={() => fotoKlik(10)}></img>
      </div>
      <div>
        <img src={h12} onClick={() => fotoKlik(11)}></img>
      </div>
      <div>
        <img src={h13} onClick={() => fotoKlik(12)}></img>
      </div>
      <div className="big">
        <img src={h14} onClick={() => fotoKlik(13)}></img>
      </div>
      <div className="wide">
        <img src={h15} onClick={() => fotoKlik(14)}></img>
      </div>
      <div>
        <img src={h16} onClick={() => fotoKlik(15)}></img>
      </div>
      <div>
        <img src={h17} onClick={() => fotoKlik(16)}></img>
      </div>
      <div>
        <img src={h18} onClick={() => fotoKlik(17)}></img>
      </div>
      <div className="wide">
        <img src={h19} onClick={() => fotoKlik(18)} className="h-19"></img>
      </div>
      <div>
        <img src={h20} onClick={() => fotoKlik(19)}></img>
      </div>
      <div>
        <img src={h21} onClick={() => fotoKlik(20)}></img>
      </div>
      <div>
        <img src={h22} onClick={() => fotoKlik(21)}></img>
      </div>
      <div className="tall">
        <img src={h23} onClick={() => fotoKlik(22)}></img>
      </div>
      <div className="tall">
        <img src={h24} onClick={() => fotoKlik(23)}></img>
      </div>
      <div>
        <img src={h25} onClick={() => fotoKlik(24)}></img>
      </div>
      <div>
        <img src={h26} onClick={() => fotoKlik(25)}></img>
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

export default stsGaleri;
