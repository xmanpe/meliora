import React from "react";
import { useNavigate } from "react-router-dom";

// import scss
import "./FramePelaksanaanRevisi.scss";

// import images
import frame from "../../images/frame/FRAME MELIORA 3;2.png";
import TestingPhoto from "../../images/frame/testing-photo.jpeg";

import CoverSIO from "../../images/homepage/cover_sio.jpg";
import CoverHariPemupukan from "../../images/homepage/cover_hari_pemupukan.jpg";
import CoverPerkembanganHari1 from "../../images/homepage/cover_perkembangan_hari_1.jpg";
import CoverPerkembanganHari2 from "../../images/homepage/cover_perkembangan_hari_2.jpg";
import CoverSidangTerbukaSenat from "../../images/homepage/cover_sidang_terbuka_senat.jpg";

const FramePelaksanaanRevisi = ({ dataHariPelaksanaan }) => {
  const navigate = useNavigate();

  return (
    <div className='section'>
      <div className='section-content'>
        <div className='content-card'>
          {dataHariPelaksanaan.map((item, index) => (
            <div key={index} className='frame-container'>
              <div className='card' onClick={() => navigate(item.path)}>
                <img
                  src={item.image || TestingPhoto}
                  alt={item.title}
                  className="content-image"
                />
                <div className='frame-info'>
                  <h2
                    dangerouslySetInnerHTML={{ __html: item.title}}
                  ></h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.date}}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const dataHariPelaksanaan = [
    {
      image: CoverSIO,
      title: "Sesi Informasi OMB",
      date: "Senin, 12 Agustus 2024",
      path: "/hari-pelaksanaan/sio"
    },
    {
      image: CoverHariPemupukan,
      title: "Hari Pemupukan",
      date: "Senin, 19 Agustus 2024",  
      path: "/hari-pelaksanaan/hari-pemupukan"
    },
    {
      image: CoverPerkembanganHari1,
      title: "Perkembangan Hari 1",
      date: "Selasa, 20 Agustus 2024",
      path: "/hari-pelaksanaan/perkembangan-hari-1"
    },
    {
      image: CoverPerkembanganHari2,
      title: "Perkembangan Hari 2",
      date: "Rabu, 21 Agustus 2024",
      path: "/hari-pelaksanaan/perkembangan-hari-2"
    },
    {
      image: CoverSidangTerbukaSenat,
      title: "Sidang Terbuka Senat",
      date: "Jumat, 23 Agustus 2024",
      path: "/hari-pelaksanaan/sidang-terbuka-senat"
    }
  ];

  return (
    <div>
      <FramePelaksanaanRevisi dataHariPelaksanaan={dataHariPelaksanaan} />
    </div>
  );
};

export default App;