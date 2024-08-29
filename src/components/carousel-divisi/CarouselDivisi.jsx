import React, { useState } from "react";
import { useContext, useEffect } from "react";
import '../../index.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CarouselDivisi.scss';

// import required modules
import { Navigation, Keyboard } from 'swiper/modules';

import carouselData from "./DataCarouselDivisi";
import { DivisiContext } from '../../pages/FotoDivisi';
import Frame1 from '../../images/frame/FRAME MELIORA 1;1.svg';
import bg1 from '../../images/background/BG-02.png';

const CarouselDivisi = () => {
    const {activeIndex, setActiveIndex} = useContext(DivisiContext);
    const [hideImages, setHideImages] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         console.log(window.scrollY)
    //         const yPosition = window.scrollY;
    //         const hideImagesThreshold = 200;
        
    //         if (yPosition > hideImagesThreshold) {
    //             setHideImages(true);
    //         } else if (yPosition <= hideImagesThreshold) {
    //             setHideImages(false);
    //         }

    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [window.scrollY]);

    return(
        <>
            <img src={bg1} className="background"/>
            <div className='divisi-swiper'>
                <Swiper
                    slidesPerView={3}  
                    spaceBetween={0}  
                    centeredSlides={true}
                    loop={true}
                    keyboard={{
                        enabled: true,
                    }}
                    // allowTouchMove={false}
                    resistanceRatio={0.1}
                    navigation={true}
                    modules={[Navigation, Keyboard]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="mySwiper"
                >
                    {
                        carouselData["DIVISI"].map((carouselData, index)=>(
                            <SwiperSlide>
                                <div className="swiper-content">
                                    <div className={`image-wrapper-${hideImages ? 'mini' : ''}`}>
                                        {carouselData.foto.map((foto, imgIndex) => {
                                            const classNames = ['left', 'middle', 'right'];
                                            const className = classNames[imgIndex] || '';
                                            return (
                                                <div key={imgIndex} className={`${className}-frame-container`}>
                                                    <img src={foto} alt={`${carouselData.nama} ${imgIndex + 1}`} className={className} />
                                                    <img src={Frame1} className={`${className}-frame`} alt="frame"/>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="keterangan-divisi">
                                        <img className="logo-divisi" src={carouselData.logo}/>
                                        <div className="text-divisi">
                                            <div className={`text-divisi-${carouselData.warna}`}>
                                                <p className="text-nama">{carouselData.nama}</p>
                                                <p className="text-divisi">{carouselData.divisi}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* <div>Active Index: {activeIndex}</div> */}
            </div>
        </>
    )
}

export default CarouselDivisi