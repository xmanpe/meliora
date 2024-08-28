import React, { useEffect } from "react";

// import images
import MelioraYellow from '../../images/logo/meliora yellow.svg'

// import components
import Header from '../../components/header/Header';
import FramePelaksanaanRevisi from '../../components/frame-pelaksanaan/FramePelaksanaanRevisi';
import TopInfo from '../../components/top-info/TopInfo';
import FloatingParticle from "../../components/particles/FloatingParticle";

const HariPelaksanaan = () => {
    return (
        <div className='margin_layout'>
            <TopInfo />
            <Header
                image={MelioraYellow}
                top='Hari Pelaksanaan'
                bottom='Hari demi hari berlalu, rangkaian telah dirancang sedemikian rupa agar peserta dapat merasakan eratnya kebersamaan dan menciptakan  momen indah yang terjalin dalam OMB UMN 2024.'
            />
            <FramePelaksanaanRevisi />
            <FloatingParticle />
        </div>
    );
}

export default HariPelaksanaan;