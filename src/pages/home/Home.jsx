import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import ExperienceModal from "../../components/experience-modal/ExperienceModal";
import "./Home.scss";

const Home = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePlayVideo = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            videoRef.current.play();
            setTimeout(() => {
                navigate("/hari-pelaksanaan");
            }, 5000);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth <= 810) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [screenWidth]);

    return (
        <div className="home">
            <div className="box-video">
                <video
                    ref={videoRef}
                    playsInline
                    muted
                >
                    <source
                        src="./Assets/videos/FINAL INTRO MELIORA.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="box-button" onClick={handlePlayVideo}>
                    
                    {!isPlaying && 
                        <div className="buttonMulai">
                            <div className="button-mulai">
                                Ketuk layar untuk lanjut!
                            </div>
                        </div>
                    }
                </div>
            </div>
            <ExperienceModal isOpen={showModal} onClose={handleCloseModal} />
        </div>
    );
};

export default Home;
