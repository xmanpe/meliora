// Background.js
import React from 'react';
import './Background.scss';

const Background = ({ image, blur = 10, size = 'cover', children }) => {
    return (
        <section 
            className="background-container" 
            style={{
                '--bg-image': `url(${image})`,
                '--blur': `${blur}px`,
                '--bg-size': size,
            }}
        >
            {children} {/* Untuk menampilkan konten di dalam komponen latar belakang */}
        </section>
    );
};

export default Background;
