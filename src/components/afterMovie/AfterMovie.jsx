import React from "react";
import { useNavigate } from "react-router-dom";
import './AfterMovie.scss';

import youtube from '../../images/icons/youtube.svg';
import info from '../../images/icons/info.svg';

const handleYoutubeClick = (event) => {
    event.stopPropagation();
    window.open('https://www.youtube.com/@OMBUMN', '_blank');
};

const AfterMovie = () => {
    return (
        <section className="each-card youtube">
            <div className="info">
                <p>Jangan lewatkan!</p>
                <img src={info} alt="info" />
            </div>
            <div className="card-image">
                <iframe src="https://www.youtube.com/embed/XG3whlcTs9U?si=GvlBBMI8QdMaTmyO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="card-info">
                <div className="card-text">
                    <h1><i>After Movie</i> OMB UMN 2024</h1>
                    <p>4 September 2024</p>
                </div>
                <div className="card-button" onClick={handleYoutubeClick}>
                    <img src={youtube} alt="play" />
                    <p>YouTube</p>
                </div>
            </div>
        </section>
    );
}
 
export default AfterMovie;