import React from 'react'
import './dokumdivisi.scss'

import Test from '../../images/frame/testing-photo.jpeg'

function dokumDivisi() {
    return (
        <div className='d-container'>
            <div className="d-title">
                <h2>dokumentasi divisi</h2>
            </div>
            <div className="content-d1">
                <div className="polaroid-d1">
                    <img src={Test} alt="" />
                    <img src={Test} alt="" />
                    <img src={Test} alt="" />
                    <img src={Test} alt="" />
                </div>
            </div>
            <div className="content-d2">
                <div className="polaroid-d2">
                    <img src={Test} alt="" />
                </div>
            </div>
        </div>
    )
}

export default dokumDivisi