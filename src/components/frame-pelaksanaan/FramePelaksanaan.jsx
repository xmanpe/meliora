import React from "react";

// import scss
import "./FramePelaksanaan.scss";

// import images
import frame from "../../images/frame/FRAME MELIORA 3;2.png";
import TestingPhoto from "../../images/frame/testing-photo.jpeg";

const FramePelaksanaan = () => {
    return (
        <section className="frame-pelaksanaan">
            <div className="LeftDiv">
                <div className="SIO">
                    {/* <img className="frame" src={frame} alt="" /> */}
                    <img className="image" src={TestingPhoto} alt="SIO" />
                    <p>Sesi Informasi OMB</p>
                </div>
            </div>
            <div className="MidDiv">
                <div className="TopDiv">
                    <div className="HariPemupukan">
                        {/* <img className="frame" src={frame} alt="" /> */}
                        <img src={TestingPhoto} alt="Hari Pemupukan" />
                        <p>Hari Pemupukan</p>
                    </div>
                </div>
                <div className="BottomDiv">
                    <div className="PerkembanganHari1">
                        {/* <img className="frame" src={frame} alt="" /> */}
                        <img src={TestingPhoto} alt="Perkembangan Hari 1" />
                        <p>Perkembangan Hari 1</p>
                    </div>
                    <div className="PerkembanganHari2">
                        {/* <img className="frame" src={frame} alt="" /> */}
                        <img src={TestingPhoto} alt="Perkembangan Hari 2" />
                        <p>Perkembangan Hari 2</p>
                    </div>
                </div>
            </div>
            <div className="RightDiv">
                <div className="STS">
                    {/* <img className="frame" src={frame} alt="" /> */}
                    <img src={TestingPhoto} alt="Sidang Terbuka Senat" />
                    <p>Sidang Terbuka Senat</p>
                </div>
            </div>
        </section>
    );
};

export default FramePelaksanaan;
