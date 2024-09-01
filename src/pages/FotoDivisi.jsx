import React from "react";
import { createContext, useState, useEffect } from "react";

import './FotoDivisi.scss';

//import background
import Header from '../components/header/Header';
import CarouselDivisi from "../components/carousel-divisi/CarouselDivisi";
import DokumentasiDivisi from "../components/dokumentasi-divisi/DokumentasiDivisi";
import PhotocardDivisi from "../components/photocard-divisi/PhotocardDivisi";
import SectionFoto from "../components/section-foto/sectionFoto"

//import images
import MelioraYellow from '../images/logo/meliora yellow.svg'

export const DivisiContext = createContext();

export const FotoDivisi = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const photocardIndex = [5, 8];
    
    return (
        <DivisiContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div className="foto-divisi_section">
                <Header
                    image={MelioraYellow}
                    top='Foto Divisi'
                    bottom='<span style="color: #FFFFFF;">wordingan disiniiiii lroem is jiap doalro sit apme dajenj loeomai pirnfi, akiwmdimaw jrun bbkslla lalwmd fanm awodmoad gjskgm apodma djeje akmkadmk, sefef koeamfaom  kemak kmmkfn.</span>'
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