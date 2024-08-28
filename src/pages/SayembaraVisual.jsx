import React from 'react';

// import images
import MelioraYellow from '../images/logo/meliora yellow.svg'

// import components
import Header from '../components/header/Header';
import SayembaraVisualComponent from '../components/sayembara-visual/SayembaraVisual';
import FloatingParticle from '../components/particles/FloatingParticle';
import TopInfo from '../components/top-info/TopInfo';

const SayembaraVisual = () => {
    return (
        <>
          <div className='margin_layout'>
            <TopInfo />
                <Header
                    image={MelioraYellow}
                    top='Sayembara Visual'
                    bottom='Setiap sentuhan seni adalah cerminan dari semangat yang menggelora, menampilkan keindahan dan kedalaman jiwa para peserta dalam setiap karya. Melalui Sayembara Visual OMB UMN 2024, peserta berkesempatan untuk menciptakan mahakarya yang menginspirasi dan meninggalkan jejak estetika yang tak terlupakan.'
                />
                <SayembaraVisualComponent />
                <FloatingParticle />
          </div>
        </>
    );
}

export default SayembaraVisual;