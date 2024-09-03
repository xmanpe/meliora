import React, { useContext, useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './DokumentasiDivisi.scss';
import { Pagination, Navigation } from 'swiper/modules';
import { DivisiContext } from "../../pages/FotoDivisi";
import dataDokumentasi from "./DataDokumentasiDivisi";

import arrowDown from '../../images/icons/arrow-down.svg';

const DokumentasiDivisi = () => {
  const { activeIndex } = useContext(DivisiContext);
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const getTextForDivisi = (divisi) => {
    if (divisi === 'Sakha') {
      return 'Row';
    }
    if (divisi === 'Saraya' || divisi === 'Bimasena') {
      return 'Sesi';
    }
    return '';
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0);
    }
    setActiveTab(0);
  }, [activeIndex]);

  const handleDropdownClick = () => {
    setShowMobileDropdown(prev => !prev);
  };

  return (
    <div className='foto-section'>
      {dataDokumentasi.FOTO[activeIndex] && dataDokumentasi.FOTO[activeIndex].kelompok.length > 1 && (
        <>
          {/* Tab Switcher for Desktop */}
          <div className='tab-container'>
            {dataDokumentasi.FOTO[activeIndex].kelompok.map((kelompok, tabIndex) => (
              <button
                key={tabIndex}
                className={`tab-button ${activeTab === tabIndex ? 'active' : ''}`}
                onClick={() => setActiveTab(tabIndex)}
              >
                {getTextForDivisi(dataDokumentasi.FOTO[activeIndex].divisi)} {tabIndex + 1}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <button className='dropdown-toggle' onClick={handleDropdownClick}>
            {getTextForDivisi(dataDokumentasi.FOTO[activeIndex].divisi)} {activeTab + 1}
            <img src={arrowDown} alt="arrow" />
          </button>
          {showMobileDropdown && (
            <div className='dropdown-menu'>
              {dataDokumentasi.FOTO[activeIndex].kelompok.map((kelompok, tabIndex) => (
                <button
                  key={tabIndex}
                  className={`dropdown-item ${activeTab === tabIndex ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tabIndex);
                    setShowMobileDropdown(false);
                  }}
                >
                  {getTextForDivisi(dataDokumentasi.FOTO[activeIndex].divisi)} {tabIndex + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerView={1}
        breakpoints={{
          1920: {
              spaceBetween: -20,
            },
          1440: {
            spaceBetween: -20,
          },
          1200: {
            spaceBetween: -20,
          },
          810: {
            spaceBetween: -20,
          },
          560:{
            spaceBetween: -10,
          },
          432:{
            spaceBetween: 0,
          },
          0:{
            spaceBetween: 0,
          }
      }}
        loop={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dataDokumentasi.FOTO.map((item, index) => {
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
        {dataDokumentasi.FOTO.map((item, index) => {
          if (index === activeIndex && (index === 0 || index === 5 || index === 8)) {
            return null;
          }
          if (index === activeIndex) {
            return (
              <div className='name-wrapper'>
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
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default DokumentasiDivisi;
