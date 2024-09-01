import React from "react";
import { useNavigate } from "react-router-dom";
import './FramePelaksanaan.scss';

// import images
import coverSIO1 from "../../images/homepage/cover_sio.jpg";
import coverSIO2 from "../../images/gif/sesi-informasi-gif.gif";
import coverHariPemupukan from "../../images/homepage/cover_hari_pemupukan.jpg";
import coverHariPemupukan2 from "../../images/gif/pemupukan-gif.gif";
import coverPerkembanganHari1 from "../../images/homepage/cover_perkembangan_hari_1.jpg";
import coverPerkembanganHari1_2 from "../../images/gif/perkembangan-satu-gif.gif";
import coverPerkembanganHari2 from "../../images/homepage/cover_perkembangan_hari_2.jpg";
import coverPerkembanganHari2_2 from "../../images/gif/perkembangan-hari-dua-gif.gif";
import coverSidangTerbukaSenat from "../../images/homepage/cover_sidang_terbuka_senat.jpg";
import coverSidangTerbukaSenat2 from "../../images/gif/sidang-terbuka-senat-gif.gif";

// import icons
import drive from '../../images/icons/folder-drive.svg';

const cardData = [
  {
    title: "Sesi Informasi OMB",
    date: "Senin, 12 Agustus 2024",
    images: [coverSIO1, coverSIO2],
    path: "/hari-pelaksanaan/sio"
  },
  {
    title: "Hari Pemupukan",
    date: "Senin, 19 Agustus 2024",
    images: [coverHariPemupukan, coverHariPemupukan2],
    path: "/hari-pelaksanaan/hari-pemupukan"
  },
  {
    title: "Perkembangan Hari 1",
    date: "Selasa, 20 Agustus 2024",
    images: [coverPerkembanganHari1, coverPerkembanganHari1_2],
    path: "/hari-pelaksanaan/perkembangan-hari-1"
  },
  {
    title: "Perkembangan Hari 2",
    date: "Rabu, 21 Agustus 2024",
    images: [coverPerkembanganHari2, coverPerkembanganHari2_2],
    path: "/hari-pelaksanaan/perkembangan-hari-2"
  },
  {
    title: "Sidang Terbuka Senat",
    date: "Jumat, 23 Agustus 2024",
    images: [coverSidangTerbukaSenat, coverSidangTerbukaSenat2],
    path: "/hari-pelaksanaan/sidang-terbuka-senat"
  }
];

const Card = ({ data, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(data.path);
    };

    return (
        <div className="each-card" onClick={handleClick}>
            <div className={`image-wrapper ${index % 2 !== 0 ? 'inverted' : ''}`}>
                <div className="card-image">
                    <img src={data.images[0]} alt={data.title} />
                </div>
                <div className="card-image">
                    <img src={data.images[1]} alt={data.title} />
                </div>
            </div>
            <div className="card-info">
                <div className="card-text">
                    <h1>{data.title}</h1>
                    <p>{data.date}</p>
                </div>
                <div className="card-button">
                    <img src={drive} alt="Drive" />
                    <p>Akses Drive</p>
                </div>
            </div>
        </div>
    );
};

const FramePelaksanaan = () => {
  return (
        <section className="pelaksanaan_section">
            <div className="card-wrapper">
                {cardData.map((card, index) => (
                    <Card key={index} data={card} index={index} />
                ))}
            </div>
        </section>
    );
};

export default FramePelaksanaan;