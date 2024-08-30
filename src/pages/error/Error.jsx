import React from 'react';
import './Error.scss';
import FloatingParticle from '../../components/particles/FloatingParticle';


const cardData = [
    { title: 'Daffa Akbari', description: 'Koordinator' },
    { title: 'Jose Andreas', description: 'Koordinator' },
    { title: 'Axel Ferdinand', description: 'Anggota' },
    { title: 'Caleb Steve', description: 'Anggota' },
    { title: 'Deswandy Wong', description: 'Anggota' },
    { title: 'Kafijaya', description: 'Anggota' },
    { title: 'Kevin Ken', description: 'Anggota' },
    { title: 'Valentino Fernando', description: 'Anggota' },
];

const Error = () => {
    return (
        <section className="error_section">
          <FloatingParticle />
            <div className="upper_content">
              <h1>404</h1>
              <p>
                Maaf, halaman yang kalian cari tidak ditemukan.
                <br />
                “Teruslah berjuang dan semangat, para Lotus Biru! Kami percaya pada kemampuan dan tekad kalian.”
                <br />
                <br />
                Nayanika, pamit undur diri.
              </p>
            </div>
            <div className="card_container">
                {cardData.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="card_content">
                            <h2>{card.title}</h2>
                            <p>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Error;
