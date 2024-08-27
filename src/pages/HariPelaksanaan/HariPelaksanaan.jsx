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
            <FloatingParticle />
            <TopInfo />
            <Header
                image={MelioraYellow}
                top='Hari Pelaksanaan'
                bottom='Hari Pelaksanaan adalah hari dimana kegiatan akan dilaksanakan.'
            />
            <FramePelaksanaanRevisi />
        </div>
    );
}

export default HariPelaksanaan;