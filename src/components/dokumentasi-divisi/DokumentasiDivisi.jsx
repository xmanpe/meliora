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
  },[activeIndex])

  // useEffect(() => {
  //   const swiperInstance = swiperRef.current.swiper;
  //   swiperInstance.on('slideChangeTransitionEnd', () => {
  //       swiperInstance.update();
  //   });
  // }, []);

  return (
    <div className='foto-section'>
      {dataDokumentasi["FOTO"].map((dataDokumentasi,index)=>{
        if (index === activeIndex && dataDokumentasi.kelompok.length>1) {
          return (
          <div className='foto-tabs'>
            {dataDokumentasi.kelompok.map((dataKelompok, kelompokIndex) => (
            <>
                <button
                  key={kelompokIndex}
                  className={`tab-button ${activeTab === kelompokIndex ? 'active' : ''}`}
                  onClick={() => setActiveTab(kelompokIndex)}
                >
                  {/* {kelompokIndex + 1} */}
                </button>
            </>
            ))}
          </div>
          )
        }
      })}
      <Swiper
        ref={swiperRef}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={0}
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
                      <img
                        src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/kelompok${activeTab + 1}/foto1.jpg`}
                        alt="Foto 1"
                      />
                    </div>
                    {/* <div className='vbg-wrapper'>
                      <img className="vbg" src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/vbg.jpg`}/>
                    </div> */}
                  </SwiperSlide>
                  <SwiperSlide key={`slide2-${index}-${activeTab}`}>
                    <div className='image-wrapper'>
                      <img
                        src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/kelompok${activeTab + 1}/foto2.jpg`}
                        alt="Foto 2"
                      />
                    </div>
                    {/* <div className='vbg-wrapper'>
                      <img className="vbg" src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/vbg.jpg`}/>
                    </div> */}
                  </SwiperSlide>
                  <SwiperSlide key={`slide3-${index}-${activeTab}`}>
                    <div className='image-wrapper'>
                      <img
                        src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/kelompok${activeTab + 1}/foto3.jpg`}
                        alt="Foto 3"
                      />
                    </div>
                    {/* <div className='vbg-wrapper'>
                      <img className="vbg" src={`./Assets/images/foto-divisi/divisi/${dataDokumentasi.divisi}/vbg.jpg`}/>
                    </div> */}
                  </SwiperSlide>
                </>
              );
            }
          })
        }
      </Swiper>
      <div className='name-wrapper'>
        {dataDokumentasi["FOTO"].map((item, index) => {
          if (index === activeIndex && index === 0) {
            return (
              <>
                <div className='koordinator-wrapper'>
                {item.bph.map((bph, bphIndex)=>(
                  <>
                  <h1 className={`koordinator-head-${item.divisi}`}>BPH</h1>
                    <div className='koordinator-img'>
                      <h2>{bph.jabatan}</h2>
                      {/* <img className={item.divisi} src={`./Assets/images/foto-divisi/divisi/${item.divisi}/${bph.nama}.jpg`} /> */}
                      <p>{bph.nama}</p>
                    </div>
                  </>
                ))}
                </div>
              </>
            )
          } else { 
            if(index===activeIndex && (index === 5 || index===8) ){
              return(
                <>
                </>
              )
            } else{
              if(index===activeIndex){
                return(
                  <>
                  <h1 className={`koordinator-head-${item.divisi}`}>Koordinator</h1>
                  <div className="koordinator-wrapper">
                      {item.koordinator.map((koor, koorIndex) =>(
                        <div className="koordinator-person">
                            {/* <div className='koordinator-img'>
                              <img className={item.divisi} src={`./Assets/images/foto-divisi/divisi/${item.divisi}/${koor}.jpg`} />
                            </div> */}
                            <p>{koor}</p>
                        </div>
                      ))}
                    </div>
                    <div className='anggota-wrapper'>
                      <h1>Anggota</h1>
                      
                      {item.kelompok.map((kel, kelIndex) =>{
                        const formattedNames = kel.anggota.join(', ').replace(/, ([^,]*)$/, ', dan $1');
                        if (kelIndex===activeTab)   
                          return (
                            <div className='anggota'>
                                <p>{formattedNames}</p>
                            </div>
                          )
                      })}
                    </div>
                </>
                )
              }
            }
          }
        })}
      </div>
      {/* <img src={test}/> */}
      {/* <img src={`./Assets/images/foto-divisi/divisi/Balwana/kelompok1/foto1.jpg`} alt='' /> */}
    </div>
  )
}

export default DokumentasiDivisi