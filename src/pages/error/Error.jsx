import React from 'react';
import './Error.scss';
import FloatingParticle from '../../components/particles/FloatingParticle';


const cardData = [
    { title: 'Daffa Akbari', description: 'Description 1' },
    { title: 'Jose Andreas', description: 'Description 2' },
    { title: 'Axel Ferdinand', description: 'Description 3' },
    { title: 'Caleb Steve', description: 'Description 4' },
    { title: 'Deswandy Wong', description: 'Description 5' },
    { title: 'Kafijaya', description: 'Description 6' },
    { title: 'Kevin Ken', description: 'Description 7' },
    { title: 'Valentino Fernando', description: 'Description 8' },
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
