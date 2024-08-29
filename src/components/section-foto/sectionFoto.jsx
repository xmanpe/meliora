import React from "react";
import "./sectionfoto.scss";

import foto1 from "../../images/meliora/foto/images-2.jpeg";
import foto2 from "../../images/meliora/foto/images-3.jpeg";
import foto3 from "../../images/meliora/foto/images.jpeg";
import foto4 from "../../images/meliora/foto/pexels-pixabay-15239.jpg";
import foto5 from "../../images/meliora/foto/images-2.jpeg";
import foto6 from "../../images/meliora/foto/images-3.jpeg";
import foto7 from "../../images/meliora/foto/images.jpeg";

function sectionFoto() {
  return (
    <div className="container">
      <div>
        <img src={foto1}></img>
      </div>
      <div className="wide">
        <img src={foto2}></img>
      </div>
      <div>
        <img src={foto3}></img>
      </div>
      <div>
        <img src={foto4}></img>
      </div>
      <div>
        <img src={foto5}></img>
      </div>
      <div>
        <img src={foto6}></img>
      </div>
      <div>
        <img src={foto7}></img>
      </div>
    </div>
  );
}

export default sectionFoto;
