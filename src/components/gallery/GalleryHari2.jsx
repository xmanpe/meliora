import React, { useState } from "react";
import "./Gallery.scss";

//h
import h21 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Allison-86.jpg";
import h22 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Allison-130.jpg";
import h23 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-7.jpg";
import h24 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-67.jpg";
import h25 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-166.jpg";
import h26 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-151.jpg";
import h27 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-134.jpg";
import h28 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-109.jpg";
import h29 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Maria Cahaya-8.jpg";
import h210 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Maria Cahaya-45.jpg";
import h211 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_10.jpg";
import h212 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_11.jpg";
import h213 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_16.jpg";
import h214 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_30.jpg";
import h215 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_62.jpg";
import h216 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_9.jpg";
import h217 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_130.jpg";
import h218 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_201.jpg";
import h219 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_221.jpg";
import h220 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_24.jpg";
import h221 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_268.jpg";
import h222 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_280.jpg";
import h225 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_300.jpg";
import h223 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_310.jpg";
import h224 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_60.jpg";
import h226 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-91.jpg";

const hari2 = [h21, h22, h23, h24, h25, h26, h27, h28, h29, h210, h211, h212, h213, h214, h215, h216, h217, h218, h219, h220, h221, h222, h223, h224, h225, h226];

function GalleryHari2() {
return (
  <div className='galeri-main'>
    {hari2.map((image, index) => (
      <div className="each-photo">
        <img
          key={index}
          src={image}
          alt=""
        />
      </div>
    ))}
  </div>
);
}

export default GalleryHari2;