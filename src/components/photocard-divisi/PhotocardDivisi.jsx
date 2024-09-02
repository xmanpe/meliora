import React, { useState, useEffect, useContext } from "react";
import { DivisiContext } from '../../pages/FotoDivisi';
import "./PhotocardDivisi.scss";
import photocardData from "./DataPhotocardDivisi";

const PhotocardDivisi = () => {
    const { activeIndex, setActiveIndex } = useContext(DivisiContext);
    const [swiperAnggota, setSwiperAnggota] = useState(false);

    useEffect(() => {
        const intervalSwiperAnggota = setInterval(() => {
            setSwiperAnggota(prev => !prev);
        }, 2500);

        return () => clearInterval(intervalSwiperAnggota);
    }, []);

    const renderPhotocard = (index) => {
        const data = photocardData[activeIndex][index];
        return (
            <div className="photocard" style={{ background: data.bgcolor }} key={index}>
                <img className="photo" src={swiperAnggota ? data.foto1 : data.foto2} alt="" />
                <div className="konten">
                    <p className="nama">{data.name}</p>
                    <p className="jabatan">{data.jabatan}</p>
                </div>
            </div>
        );
    };

    const renderAnggota = () => {
        return photocardData[activeIndex].map((item, index) => {
            if (item.jabatan === "Anggota") {
                return (
                    <div className="photocard" style={{ background: item.bgcolor }} key={index}>
                        {activeIndex === 8 && (
                            <>
                                <img className="bg-text" src={item.bgtext} alt="" />
                                <img className="bg-atas" src="./Assets/PhotocardDivisi/element/bg_atas.png" alt="" />
                                <img className="bg-bawah" src="./Assets/PhotocardDivisi/element/bg_bawah.png" alt="" />
                            </>
                        )}
                        <img className="bg-baskara" src={item.bgbaskara} alt="" />
                        <img className="photo" src={swiperAnggota ? item.foto1 : item.foto2} alt="" />
                        <div className="konten">
                            <p className="nama">{item.name}</p>
                            <p className="jabatan">{item.jabatan}</p>
                        </div>
                    </div>
                );
            }
            return null;
        });
    };

    return (
        <div className="photocard-divisi">
            {activeIndex === 0 && (
                <div className="photocard-wrapper gandara">
                    {Array.from({ length: 6 }).map((_, index) => renderPhotocard(index))}
                </div>
            )}

            {activeIndex === 5 && (
                <div className="photocard-wrapper koor single">
                    <div className="photocard" style={{ background: photocardData[activeIndex][0].bgcolor }}>
                        <img className="bg-baskara" src="./Assets/PhotocardDivisi/element/camera.png" alt="" />
                        <img className="photo" src={swiperAnggota ? photocardData[activeIndex][0].foto1 : photocardData[activeIndex][0].foto2} alt="" />
                        <div className="konten">
                            <p className="nama">{photocardData[activeIndex][0].name}</p>
                            <p className="jabatan">{photocardData[activeIndex][0].jabatan}</p>
                        </div>
                    </div>
                </div>
            )}

            {activeIndex === 8 && (
                <div className="photocard-wrapper koor">
                    <div className="photocard" style={{ background: photocardData[activeIndex][0].bgcolor }}>
                        <img className="bg-text" src={photocardData[activeIndex][0].bgtext} alt="" />
                        <img className="bg-atas" src="./Assets/PhotocardDivisi/element/bg_atas.png" alt="" />
                        <img className="bg-bawah" src="./Assets/PhotocardDivisi/element/bg_bawah.png" alt="" />
                        <img className="photo" src={swiperAnggota ? photocardData[activeIndex][0].foto1 : photocardData[activeIndex][0].foto2} alt="" />
                        <div className="konten">
                            <p className="nama">{photocardData[activeIndex][0].name}</p>
                            <p className="jabatan">{photocardData[activeIndex][0].jabatan}</p>
                        </div>
                    </div>
                    <div className="photocard" style={{ background: photocardData[activeIndex][0].bgcolor }}>
                        <img className="bg-text" src={photocardData[activeIndex][1].bgtext} alt="" />
                        <img className="bg-atas" src="./Assets/PhotocardDivisi/element/bg_atas.png" alt="" />
                        <img className="bg-bawah" src="./Assets/PhotocardDivisi/element/bg_bawah.png" alt="" />
                        <img className="photo" src={swiperAnggota ? photocardData[activeIndex][1].foto1 : photocardData[activeIndex][1].foto2} alt="" />
                        <div className="konten">
                            <p className="nama">{photocardData[activeIndex][1].name}</p>
                            <p className="jabatan">{photocardData[activeIndex][1].jabatan}</p>
                        </div>
                    </div>
                </div>
            )}

            {(activeIndex !== 0 && activeIndex !== 5 && activeIndex !== 8) && (
                <div className="photocard-wrapper koor">
                    {renderPhotocard(0)}
                    {renderPhotocard(1)}
                </div>
            )}

            <div className="photocard-wrapper anggota">
                {renderAnggota()}
            </div>
        </div>
    );
}

export default PhotocardDivisi;
