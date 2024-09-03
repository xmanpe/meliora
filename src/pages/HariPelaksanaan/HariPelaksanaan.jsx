import React, { useEffect } from "react";
import { motion } from "framer-motion";
import './HariPelaksanaan.scss';

// import images
import MelioraYellow from '../../images/logo/meliora yellow.svg'

// import components
import Header from '../../components/header/Header';
import FloatingParticle from "../../components/particles/FloatingParticle";
import FramePelaksanaan from "../../components/frame-pelaksanaan/FramePelaksanaan";

const HariPelaksanaan = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="hari-pelaksanaan"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <Header
                    image={MelioraYellow}
                    top='Hari Pelaksanaan'
                    bottom='<span style="color: #FFFFFF;">Hari demi hari berlalu, rangkaian telah dirancang sedemikian rupa agar peserta dapat merasakan eratnya kebersamaan dan menciptakan  momen indah yang terjalin dalam OMB UMN 2024.</span>'
                />
            </motion.div>
            <motion.div variants={itemVariants}>
                <FramePelaksanaan />
            </motion.div>
            <FloatingParticle />
        </motion.div>
    );
}

export default HariPelaksanaan;