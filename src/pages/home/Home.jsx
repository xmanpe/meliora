import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import "./Home.scss";

const Home = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();

    const togglePlay = () => {
        if (!isPlaying) {
          setIsPlaying(!isPlaying);
          videoRef.current.play();
          setTimeout(() => {
            navigate("/hari-pelaksanaan");
          }, 5000); 
        }
    };

    return (
        <div className="home">
            <div className="box-video">
                <video
                    ref={videoRef}>
                    <source
                        src="./Assets/videos/FINAL INTRO MELIORA.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="box-button" onClick={() => togglePlay()}>
                    <div className="buttonMulai">
                        {!isPlaying && <div>
                            Tekan Logo Meliora untuk Lanjut
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;