import React, { useContext } from "react";
import "./SectionFoto.scss";

import foto1 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-13.jpg";
import foto2 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Andrew Su-73.jpg";
import foto3 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Diana Angyulia_Foto Terbaik-7.jpg";
import foto4 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Rether_31.jpg";
import foto5 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Valentino-80.jpg";
import foto6 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Valentino-80.jpg";
import foto7 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Delon_53.jpg";
import { DivisiContext } from "../../pages/FotoDivisi";
import sectionFotoData from "./DataSectionFoto";

const SectionFoto=()=> {
  const {activeIndex} = useContext(DivisiContext);
  return (
    sectionFotoData["FOTO"].map((item,itemIndex)=>{
      if(itemIndex===activeIndex){
        return(
        <div className="wrapper">
          <h1>Dokumentasi Divisi</h1>
          <div className="container">
            {/* {activeIndex} */}
            <div>
              <img src={item.foto1}></img>
            </div>
            <div className="wide">
              <img src={item.foto2}></img>
            </div>
            <div>
              <img src={item.foto3}></img>
            </div>
            <div>
              <img src={item.foto4}></img>
            </div>
            <div>
              <img src={item.foto5}></img>
            </div>
            <div>
              <img src={item.foto6}></img>
            </div>
            <div>
              <img src={item.foto7}></img>
            </div>
          </div>
        </div>
        )
      }
    })
  );
}

export default SectionFoto;
