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
    path: "/hari-pelaksanaan/sio",
    drive: "https://drive.google.com/drive/folders/1YJ4mkwku5bDtaXM3s6BPgEYfRjf9kjGK"
  },
  {
    title: "Hari Pemupukan",
    date: "Senin, 19 Agustus 2024",
    images: [coverHariPemupukan, coverHariPemupukan2],
    path: "/hari-pelaksanaan/hari-pemupukan",
    drive: "https://drive.google.com/drive/folders/1DD8AWRthk-M7ox4_LPW74FX2A5hvqR9Y"
  },
  {
    title: "Perkembangan Hari 1",
    date: "Selasa, 20 Agustus 2024",
    images: [coverPerkembanganHari1, coverPerkembanganHari1_2],
    path: "/hari-pelaksanaan/perkembangan-hari-1",
    drive: "https://drive.google.com/drive/folders/1fV-UKtpsZdmnaGcOmbLiHR7dFjxMbAWq"
  },
  {
    title: "Perkembangan Hari 2",
    date: "Rabu, 21 Agustus 2024",
    images: [coverPerkembanganHari2, coverPerkembanganHari2_2],
    path: "/hari-pelaksanaan/perkembangan-hari-2",
    drive: "https://drive.google.com/drive/folders/1F_LCTP0hCfIgdDuY095Am9iYvKEGUqe5"
  },
  {
    title: "Sidang Terbuka Senat",
    date: "Jumat, 23 Agustus 2024",
    images: [coverSidangTerbukaSenat, coverSidangTerbukaSenat2],
    path: "/hari-pelaksanaan/sidang-terbuka-senat",
    drive: "https://drive.google.com/drive/folders/1y0X-nFNalermzOkh1E5AhMyRogK6_rdb"
  }
];

const Card = ({ data, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(data.path);
    };

    const handleDriveClick = (event) => {
        event.stopPropagation();
        window.open(data.drive, '_blank');
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
                <div className="card-button" onClick={handleDriveClick}>
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
