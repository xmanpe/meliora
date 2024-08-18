import React from 'react';

// import images
import MelioraYellow from '../../images/logo/meliora yellow.svg'

// import components
import Header from '../../components/header/Header';
import FramePelaksanaan from '../../components/frame-pelaksanaan/FramePelaksanaan';

const HariPelaksanaan = () => {
    return (
        <>
            <Header
                image={MelioraYellow}
                top='Hari Pelaksanaan'
                bottom='Hari Pelaksanaan adalah hari dimana kegiatan akan dilaksanakan.'
            />
            <FramePelaksanaan />
        </>
    );
}
 
export default HariPelaksanaan;