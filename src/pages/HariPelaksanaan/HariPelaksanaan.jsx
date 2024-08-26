import React from 'react';

// import images
import MelioraYellow from '../../images/logo/meliora yellow.svg'

// import components
import Header from '../../components/header/Header';
import FramePelaksanaan from '../../components/frame-pelaksanaan/FramePelaksanaan';
import TopInfo from '../../components/top-info/TopInfo';

const HariPelaksanaan = () => {
    return (
        <div className='hari_pelaksanaan'>
            <TopInfo />
            <Header
                image={MelioraYellow}
                top='Hari Pelaksanaan'
                bottom='Hari Pelaksanaan adalah hari dimana kegiatan akan dilaksanakan.'
            />
            <FramePelaksanaan />
        </div>
    );
}
 
export default HariPelaksanaan;