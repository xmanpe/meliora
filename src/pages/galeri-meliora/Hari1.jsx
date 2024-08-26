import React from "react";
import "./galeri.scss";
import SIO from "./masonryGaleri";
import h1Galeri from './hari1Galeri';

import DriveIcon from "../../images/meliora/icon/download-drive-icon.png";

function Hari1() {
  return (
    <div className="main-container">
      <div className="galeri">
        <div className="container-utama-header">
          <div className="container-judul">
            <div className="judul">
              <h1>Perkembangan Hari - 1</h1>
            </div>
            <div className="deskripsi-judul">
              <p>
                Di balik kepanitiaan merupakan apresiasi kepada para panitia{" "}
                <br></br>yang telah mendedikasikan diri dan mencetak sejarah
                baru bersama OMB UMN
              </p>
            </div>
            <div className="deskripsi-drive">
              <p>Mau lihat semua dokumentasi?</p>
            </div>
            <div className="button-drive">
              <a href="https://www.youtube.com" target="blank">
                <button className="button-drive-1">
                  <div className="text-1">
                    <p>
                      <u className="custom-line">AKSES DRIVE</u>
                    </p>
                  </div>
                  <div className="text-2">
                    <img src={DriveIcon} alt="icon drive"></img>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <h1Galeri/>
        <SIO/>
      </div>
      <div className="white-space"></div>
    </div>
  );
}

export default Hari1;
