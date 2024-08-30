import React from "react";
import CarouselDivisi from "../components/carousel-divisi/CarouselDivisi";
import DokumentasiDivisi from "../components/dokumentasi-divisi/DokumentasiDivisi";
import { createContext, useState } from "react";

export const DivisiContext = createContext();

export const FotoDivisi = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <DivisiContext.Provider value={{ activeIndex, setActiveIndex }}>
            <CarouselDivisi />
            <DokumentasiDivisi />
        </DivisiContext.Provider>
    );
};

export default FotoDivisi;