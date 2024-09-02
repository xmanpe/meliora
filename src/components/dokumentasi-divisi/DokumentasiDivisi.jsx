import React, { useContext, useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './DokumentasiDivisi.scss';
import { Pagination, Navigation } from 'swiper/modules';
import { DivisiContext } from "../../pages/FotoDivisi";
import dataDokumentasi from "./DataDokumentasiDivisi";

const DokumentasiDivisi = () => {
  const { activeIndex } = useContext(DivisiContext);
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0);
    }
    setActiveTab(0);
  }, [activeIndex]);

  return (
    <div className='foto-section'>
      {dataDokumentasi["FOTO"].map((item, index) => {
        if (index === activeIndex && item.kelompok.length > 1) {
          return (
            <div className='foto-tabs' key={index}>
              {item.kelompok.map((kelompok, kelompokIndex) => (
                <button
                  key={kelompokIndex}
                  className={`tab-button ${activeTab === kelompokIndex ? 'active' : ''}`}
                  onClick={() => setActiveTab(kelompokIndex)}
                >
                  Sesi {kelompokIndex + 1}
                </button>
              ))}
            </div>
          );
        }
        return null;
      })}

      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dataDokumentasi["FOTO"].map((item, index) => {
          if (index === activeIndex) {
            return (
              <>
                {Array.from({ length: 3 }).map((_, slideIndex) => (
                  <SwiperSlide key={`slide-${index}-${activeTab}-${slideIndex}`}>
                    <div className='image-wrapper'>
                      <img
                        src={`./Assets/images/foto-divisi/divisi/${item.divisi}/kelompok${activeTab + 1}/foto${slideIndex + 1}.jpg`}
                        alt={`Foto ${slideIndex + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </>
            );
          }
          return null;
        })}
      </Swiper>

      <div className='name-wrapper'>
        {dataDokumentasi["FOTO"].map((item, index) => {
          if (index === activeIndex && (index === 0 || index === 5 || index === 8)) {
            return null;
          }
          if (index === activeIndex) {
            return (
              <>
                <div className={`koordinator-head ${item.divisi}`} key={`${item.divisi}-head`}>
                  <h1>Koordinator</h1>
                </div>
                <div className="koordinator-wrapper">
                  {item.koordinator.map((koor, koorIndex) => (
                    <div className="koordinator-person" key={`koor-${koorIndex}`}>
                      <div className='koordinator-img'>
                        <img className={item.divisi} src={`./Assets/images/foto-divisi/divisi/${item.divisi}/${koor}.jpg`} alt={koor} />
                      </div>
                      <h1>{koor}</h1>
                    </div>
                  ))}
                </div>
                <div className='anggota-wrapper'>
                  <h1>Anggota</h1>
                  {item.kelompok.map((kel, kelIndex) => {
                    const formattedNames = kel.anggota.join(', ').replace(/, ([^,]*)$/, ', dan $1');
                    if (kelIndex === activeTab) {
                      return (
                        <div className='anggota' key={`kel-${kelIndex}`}>
                          <p>{formattedNames}.</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default DokumentasiDivisi;
