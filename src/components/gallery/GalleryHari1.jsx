import React, { useState } from "react";
import "./Gallery.scss";

import h1 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-1.jpg";
import h2 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-9.jpg";
import h3 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-13.jpg";
import h4 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-17.jpg";
import h5 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-55.jpg";
import h6 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Andrew Su-57.jpg";
import h7 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Andrew Su-73.jpg";
import h8 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Delon_53.jpg";
import h9 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Diana Angyulia_Foto Terbaik-7.jpg";
import h10 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-3.jpg";
import h11 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-5.jpg";
import h12 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-17.jpg";
import h13 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-19.jpg";
import h14 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-34.jpg";
import h15 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Rether_1.jpg";
import h16 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Rether_31.jpg";
import h17 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Steven Hans_174.jpg";
import h18 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Valentino-17.jpg";
import h19 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Valentino-80.jpg";
import h20 from "../../images/meliora/foto/HARI1/PerkembanganHari1_Ravalen Virginia-31.jpg";
import h21 from "../../images/meliora/foto/HARI1/PerkembanganHari1_Ravalen Virginia-58.jpg";
import h22 from "../../images/meliora/foto/HARI1/Qhedyzya Ricardiane_Perkembangan Hari 1  (13 of 77).jpg";
import h25 from "../../images/meliora/foto/HARI1/Qhedyzya Ricardiane_Perkembangan Hari 1  (32 of 77).jpg";
import h23 from "../../images/meliora/foto/HARI1/Qhedyzya Ricaridiane_Perkembangan hari 1 (1).jpg";
import h24 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-65.jpg";
import h26 from "../../images/meliora/foto/HARI1/tall/Perkembangan Hari 1_Delon_19.jpg";

const hari1 = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h25, h23, h24, h26];

function GalleryHari1() {
return (
  <div className='galeri-main'>
    {hari1.map((image, index) => (
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

export default GalleryHari1;