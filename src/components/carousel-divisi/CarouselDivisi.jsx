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
import { Navigation, Keyboard, Pagination, Mousewheel, Autoplay, A11y } from 'swiper/modules';

import carouselData from "./DataCarouselDivisi";
import { DivisiContext } from '../../pages/FotoDivisi';

const CarouselDivisi = () => {
    const {activeIndex, setActiveIndex} = useContext(DivisiContext);
    const [hideImages, setHideImages] = useState(false);

    return(
        <>
            <div className='divisi-swiper'>
                <Swiper
                    slidesPerView={3}  
                    spaceBetween={-100}  
                    centeredSlides={true}
                    loop={true}         
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        1920: {
                            slidesPerView: 5,
                          },
                        1440: {
                          slidesPerView: 4,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                        810: {
                          slidesPerView: 3,
                        },
                        560:{
                            slidesPerView: 3,
                        },
                        432:{
                            slidesPerView: 1,
                        },
                        0:{
                            slidesPerView: 1,
                        }
                    }}
                    resistanceRatio={0.01}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    modules={[Navigation, Pagination, A11y, Mousewheel]}
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
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="keterangan-divisi">
                                        <img className="logo-divisi" src={carouselData.logo}/>
                                        <div className="text-wrapper">
                                            <h1 className="text-nama">{carouselData.nama}</h1>
                                            <div className="text-divisi-wrapper">
                                                <p className={`text-divisi-${carouselData.warna}`}>{carouselData.divisi}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default CarouselDivisi