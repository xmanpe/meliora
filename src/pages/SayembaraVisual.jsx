import React from 'react';

// import images
import MelioraYellow from '../images/logo/meliora yellow.svg'

// import components
import Header from '../components/header/Header';
import SayembaraVisualComponent from '../components/sayembara-visual/SayembaraVisual';
import FloatingParticle from '../components/particles/FloatingParticle';

const SayembaraVisual = () => {
    return (
        <>
            <Header
                image={MelioraYellow}
                top='Sayembara Visual'
                bottom='Kompetisi tahunan khusus yang diadakan untuk Peserta OMB UMN 2024 untuk mengekspresikan kreativitas para Pejuang Lotus Biru.'
            />
            <SayembaraVisualComponent />
            <FloatingParticle />
        </>
    );
}

export default SayembaraVisual;