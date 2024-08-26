import React, { useContext,useState,useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './DokumentasiDivisi.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { DivisiContext } from "../../pages/FotoDivisi";
import dataDokumentasi from "./DataDokumentasiDivisi";

const DokumentasiDivisi = () => {
  const { activeIndex } = useContext(DivisiContext);
  const [activeTab,setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  useEffect(()=>{
    setActiveTab(0);
    swiperRef.current.swiper.slideTo(0);
  },[activeIndex,activeTab])

  return (
    <div className='foto-section'>
      <div className='foto-tabs'>
        {dataDokumentasi["FOTO"].map((dataDokumentasi,index)=>{
          if (index === activeIndex) {
            return dataDokumentasi.kelompok.map((dataKelompok, kelompokIndex) => (
              <button
                key={kelompokIndex}
                className={`tab-button ${activeTab === kelompokIndex ? 'active' : ''}`}
                onClick={() => setActiveTab(kelompokIndex)}
              >
                {kelompokIndex + 1}
              </button>
            ));
          }
        })}
      </div>
      <Swiper
        ref={swiperRef}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dataDokumentasi["FOTO"].map((dataDokumentasi, index) => {
            if (index === activeIndex) {
              return (
                <>
                  <SwiperSlide key={`slide1-${index}-${activeTab}`}>
                    <div className='image-wrapper'>
                      {dataDokumentasi.divisi}
                      <img
                        src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/kelompok${activeTab + 1}/foto1.jpg`}
                        alt="Foto 1"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={`slide2-${index}-${activeTab}`}>
                    <div className='image-wrapper'>
                      {dataDokumentasi.divisi}
                      <img
                        src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/kelompok${activeTab + 1}/foto2.jpg`}
                        alt="Foto 2"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={`slide3-${index}-${activeTab}`}>
                    <div className='image-wrapper'>
                      {dataDokumentasi.divisi}
                      <img
                        src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/kelompok${activeTab + 1}/foto3.jpg`}
                        alt="Foto 3"
                      />
                    </div>
                  </SwiperSlide>
                </>
              );
            }
        })
        }
      </Swiper>
      {/* <img src={test}/> */}
      {/* <img src={`./Assets/images/foto-divisi/divisi/Balwana/kelompok1/foto1.jpg`} alt='' /> */}
    </div>
  )
}

export default DokumentasiDivisi