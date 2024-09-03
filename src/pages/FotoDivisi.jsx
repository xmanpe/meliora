// FotoDivisi.jsx

import React, { createContext, useState, useEffect } from "react";
import './FotoDivisi.scss';
import Header from '../components/header/Header';
import CarouselDivisi from "../components/carousel-divisi/CarouselDivisi";
import DokumentasiDivisi from "../components/dokumentasi-divisi/DokumentasiDivisi";
import PhotocardDivisi from "../components/photocard-divisi/PhotocardDivisi";
import SectionFoto from "../components/section-foto/sectionFoto";
import carouselData from '../components/carousel-divisi/DataCarouselDivisi';

// Import images
import MelioraYellow from '../images/logo/meliora yellow.svg';
import gandaraImage from '../images/background/divisi/gandara.jpeg';
import baskaraImage from '../images/background/divisi/baskara.jpeg';
import caksanaImage from '../images/background/divisi/caksana.jpeg';
import nayanikaImage from '../images/background/divisi/nayanika.jpeg';
import gajendraImage from '../images/background/divisi/gajendra.jpeg';
import sakhaImage from '../images/background/divisi/sakha.jpeg';
import lavanyaImage from '../images/background/divisi/lavanya.jpeg';
import bimasenaImage from '../images/background/divisi/bimasena.jpeg';
import sarayaImage from '../images/background/divisi/saraya.jpeg';
import sarkaraImage from '../images/background/divisi/sarkara.jpeg';
import balwanaImage from '../images/background/divisi/balwana.jpeg';

export const DivisiContext = createContext();

const gradients = {
    biru: `url(${gandaraImage})`,
    merah: `url(${balwanaImage})`,
    abu: `url(${caksanaImage})`,
    toska: `url(${lavanyaImage})`,
    hitam: `url(${bimasenaImage})`,
    oranye: `url(${baskaraImage})`,
    ungu: `url(${gajendraImage})`,
    pink: `url(${sakhaImage})`,
    kuning: `url(${nayanikaImage})`,
    cokelat: `url(${sarkaraImage})`,
    hijau: `url(${sarayaImage})`,
};

export const FotoDivisi = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const photocardIndex = [0, 5, 8];
    const activeDivisi = carouselData["DIVISI"][activeIndex];
    const gradientColor = gradients[activeDivisi?.warna] || 'none';

    return (
        <DivisiContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div
                className="foto-divisi_section"
                style={{
                    backgroundImage: `${gradientColor}, url(${activeDivisi?.image || ''})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                <Header
                    image={MelioraYellow}
                    top='Foto Divisi'
                    bottom='Yuk, kenali tiap divisi di OMB UMN 2024!'
                />
                <CarouselDivisi />
                {photocardIndex.includes(activeIndex) && <PhotocardDivisi />}
                <DokumentasiDivisi />
                <SectionFoto />
            </div>
        </DivisiContext.Provider>
    );
};

export default FotoDivisi;
