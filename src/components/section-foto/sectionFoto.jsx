import React, { useContext } from "react";
import "./sectionfoto.scss";

import { DivisiContext } from "../../pages/FotoDivisi";
import sectionFotoData from "./DataSectionFoto";

const SectionFoto=()=> {
  const {activeIndex} = useContext(DivisiContext);
  return (
    sectionFotoData["FOTO"].map((item,itemIndex)=>{
      if(itemIndex===activeIndex){
        return(
        <div className="container">
          <h1>Dokumentasi Divisi</h1>
          <div className="wrapper">
              <div className="image-parent">
                <img src={item.foto1}></img>
              </div>
              <div className="image-parent">
                <img src={item.foto2}></img>
              </div>
              <div className="image-parent">
                <img src={item.foto3}></img>
              </div>
              <div className="image-parent">
                <img src={item.foto4}></img>
              </div>
              <div className="image-parent">
                <img src={item.foto5}></img>
              </div>
              <div className="image-parent">
                <img src={item.foto6}></img>
              </div>
              <div className="image-parent">
                <img src={item.foto7}></img>
              </div>
              <div className="image-parent">
                <img src={item.foto8}></img>
              </div>
          </div>
        </div>
        )
      }
    })
  );
}

export default SectionFoto;
