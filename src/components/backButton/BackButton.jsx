import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.scss';

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/hari-pelaksanaan');
    };

    return (
        <div className="back-button">
            <button onClick={handleClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="chevron-icon"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
                Kembali
            </button>
        </div>
    );
}

export default BackButton;
