import React, { useEffect } from "react";
import './HariPelaksanaan.scss';

// import images
import MelioraYellow from '../../images/logo/meliora yellow.svg'

// import components
import Header from '../../components/header/Header';
import FloatingParticle from "../../components/particles/FloatingParticle";
import FramePelaksanaan from "../../components/frame-pelaksanaan/FramePelaksanaan";

const HariPelaksanaan = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="hari-pelaksanaan">
            <Header
                image={MelioraYellow}
                top='Hari Pelaksanaan'
                bottom='<span style="color: #FFFFFF;">Hari demi hari berlalu, rangkaian telah dirancang sedemikian rupa agar peserta dapat merasakan eratnya kebersamaan dan menciptakan  momen indah yang terjalin dalam OMB UMN 2024.</span>'
            />
            <FramePelaksanaan />
            <FloatingParticle />
        </div>
    );
}

export default HariPelaksanaan;