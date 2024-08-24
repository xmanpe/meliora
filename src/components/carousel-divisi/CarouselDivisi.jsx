import React, { useState } from "react";
import { useContext } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CarouselDivisi.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import carouselData from "./DataCarouselDivisi";
import { DivisiContext } from '../../pages/FotoDivisi';

const CarouselDivisi = () => {
    const {activeIndex, setActiveIndex} = useContext(DivisiContext);
    // const [activeIndex, setActiveIndex] = useState(0);

    return(
        <>
            <div className='divisi-swiper'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="mySwiper"
                >
                    {
                        carouselData["DIVISI"].map((carouselData, index)=>(
                            <SwiperSlide>
                                <div className="swiper-content">
                                    <div className="image-wrapper">
                                        {carouselData.foto.map((foto, imgIndex) => {
                                            const classNames = ['left', 'middle', 'right'];
                                            const className = classNames[imgIndex] || '';
                                            return (
                                                <img key={imgIndex} src={foto} alt={`${carouselData.nama} ${imgIndex + 1}`} className={className} />
                                            );
                                        })}
                                    </div>
                                    <div className="keterangan-divisi">
                                        <img className="logo-divisi" src={carouselData.logo}/>
                                        <div className="text-divisi">
                                            <p>{carouselData.nama}</p>
                                            <p>{carouselData.divisi}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div>Active Index: {activeIndex}</div>
            </div>
        </>
    )
}

export default CarouselDivisi