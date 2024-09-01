import React, { useState, useEffect, useRef, useContext } from "react";
import { DivisiContext } from '../../pages/FotoDivisi';
import "./PhotocardDivisi.scss";

import photocardData from "./DataPhotocardDivisi";

const PhotocardDivisi = () => {
    const {activeIndex, setActiveIndex} = useContext(DivisiContext);

    const [swiperAnggota, setSwiperAnggota] = useState(false);

    // GANTI CARD WISKIRA ATAU PRABANGKARA
    useEffect(() => {
        const intervalSwiperAnggota = setInterval(() => {
            setSwiperAnggota(!swiperAnggota);
        }, 2500);

        return () => {
            clearInterval(intervalSwiperAnggota);
        };
    }, [swiperAnggota]);
    
    // gandara: atas 3 bawah 3
    // nayanika: atas koor, bawah 3 anggota (swiper)
    // lavanya: atas koor, bawah 3 anggota (swiper)
    // caksana: atas koor, bawah 3 anggota (swiper)
    // baskara atas koor, bawah 3/4 anggota (swiper)

    // 0 gandara
    // 1 balwana
    // 2 caksana
    // 3 lavanya
    // 4 bimasena
    // 5 baskara
    // 6 gajendra
    // 7 sakha
    // 8 nayanika 
    // 9 sarkara
    // 10 saraya

    return (
        <div className="photocard-divisi">
            {activeIndex == 5 ? (
                <div className="photocard-wrapper koor single">
                    <div className="photocard" style={{'backgroundColor': photocardData[activeIndex][0].bgcolor}}>
                        <img className="photo" src={swiperAnggota ? photocardData[activeIndex][0].foto1 : photocardData[activeIndex][0].foto2} alt="" />
                        <div className="konten">
                            <p className="nama">{photocardData[activeIndex][0].name}</p>
                            <p className="jabatan">{photocardData[activeIndex][0].jabatan}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="photocard-wrapper koor">
                    <div className="photocard" style={{'backgroundColor': photocardData[activeIndex][0].bgcolor}}>
                        <img className="bg-text" src={photocardData[activeIndex][0].bgtext} alt="" />
                        <img className="bg-atas" src="./Assets/PhotocardDivisi/element/bg_atas.png" alt="" />
                        <img className="bg-bawah" src="./Assets/PhotocardDivisi/element/bg_bawah.png" alt="" />
                        <img className="photo" src={swiperAnggota ? photocardData[activeIndex][0].foto1 : photocardData[activeIndex][0].foto2} alt="" />
                        <div className="konten">
                            <p className="nama">{photocardData[activeIndex][0].name}</p>
                            <p className="jabatan">{photocardData[activeIndex][0].jabatan}</p>
                        </div>
                    </div>
                    <div className="photocard" style={{'backgroundColor': photocardData[activeIndex][0].bgcolor}}>
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

            <div className="photocard-wrapper anggota">  
                {photocardData[activeIndex].map((item, index) => {
                    if(item.jabatan == "Anggota") {
                        return (
                            <div className="photocard" style={{'backgroundColor': item.bgcolor}}>
                                {activeIndex == 8 && (
                                    <>
                                        <img className="bg-text" src={item.bgtext} alt="" />
                                        <img className="bg-atas" src="./Assets/PhotocardDivisi/element/bg_atas.png" alt="" />
                                        <img className="bg-bawah" src="./Assets/PhotocardDivisi/element/bg_bawah.png" alt="" />
                                    </>
                                )}
                                <img className="photo" src={swiperAnggota ? item.foto1 : item.foto2} alt="" />
                                <div className="konten">
                                    <p className="nama">{item.name}</p>
                                    <p className="jabatan">{item.jabatan}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default PhotocardDivisi;