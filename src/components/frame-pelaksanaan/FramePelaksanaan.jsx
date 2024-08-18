import React from "react";

// import scss
import "./FramePelaksanaan.scss";

// import images
import Frame from '../../images/frame/frame.svg'
import TestingPhoto from '../../images/frame/testing-photo.jpeg'


const FramePelaksanaan = () => {
    return (
        <section className="frame-pelaksanaan">
            <div className="each-frame">
                <div className="border">
                    {/* <img className="absolute-frame" src={Frame} alt="frame" /> */}
                    <img src={TestingPhoto} alt="" />
                </div>
                <div className="text">
                    <h1>Hari Pemupukan</h1>
                    <p>12 Desember 2021</p>
                </div>
            </div>
            <div className="each-frame">
                <div className="border">
                    {/* <img className="absolute-frame" src={Frame} alt="frame" /> */}
                    <img src={TestingPhoto} alt="" />
                </div>
                <div className="text">
                    <h1>Hari Pemupukan</h1>
                    <p>12 Desember 2021</p>
                </div>
            </div>
            <div className="each-frame">
                <div className="border">
                    {/* <img className="absolute-frame" src={Frame} alt="frame" /> */}
                    <img src={TestingPhoto} alt="" />
                </div>
                <div className="text">
                    <h1>Hari Pemupukan</h1>
                    <p>12 Desember 2021</p>
                </div>
            </div>
            <div className="each-frame">
                <div className="border">
                    {/* <img className="absolute-frame" src={Frame} alt="frame" /> */}
                    <img src={TestingPhoto} alt="" />
                </div>
                <div className="text">
                    <h1>Hari Pemupukan</h1>
                    <p>12 Desember 2021</p>
                </div>
            </div>
        </section>
    );
}
 
export default FramePelaksanaan;