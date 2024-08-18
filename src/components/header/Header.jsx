import React from 'react';

// import scss
import './Header.scss';

const Header = ({image, top, bottom}) => {
    return (
        <section className="header">
            <img className='header-logo' src={image} alt="image header" />
            <div className='title'>
                <h1>{top}</h1>
                <p>{bottom}</p>
            </div>
        </section>
    );
}
 
export default Header;