import React, { useEffect } from "react";

// import images
import MelioraYellow from '../../images/logo/meliora yellow.svg'
import BackgroundHariPelaksanaan from '../../images/background/homepage.png';

// import components
import Header from '../../components/header/Header';
import FramePelaksanaanRevisi from '../../components/frame-pelaksanaan/FramePelaksanaanRevisi';
import TopInfo from '../../components/top-info/TopInfo';
import FloatingParticle from "../../components/particles/FloatingParticle";
import Background from "../../components/background/Background";

const HariPelaksanaan = () => {
    return (
        <Background image={BackgroundHariPelaksanaan} blur={10}  size='cover'>
            <div className='margin_layout'>
                <TopInfo />
                <Header
                    image={MelioraYellow}
                    top='Hari Pelaksanaan'
                    bottom='<span style="color: #FFFFFF;">Hari demi hari berlalu, rangkaian telah dirancang sedemikian rupa agar peserta dapat merasakan eratnya kebersamaan dan menciptakan  momen indah yang terjalin dalam OMB UMN 2024.</span>'
                />
                <FramePelaksanaanRevisi />
                <FloatingParticle />
            </div>
        </Background>
    );
}

export default HariPelaksanaan;