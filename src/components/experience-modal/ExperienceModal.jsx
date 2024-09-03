import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceModal.scss';

const ExperienceModal = ({ isOpen, onClose }) => {
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        isOpen && (
             <div className="modal-overlay-experience">
                <motion.div
                    className="modal-content-experience"
                    initial="hidden"
                    animate="visible"
                    variants={modalVariants}
                >
                    <p>Guna mendapatkan pengalaman yang terbaik, kami menyarankan penggunaan perangkat PC/Laptop untuk mengakses laman ini dan menggunakan laman selain jenis <b>Safari</b>.</p>
                    <button onClick={onClose}>Siap!</button>
                </motion.div>
            </div>
        )
    );
};

export default ExperienceModal;
