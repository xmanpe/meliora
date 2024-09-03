import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./SidangTerbukaSenat.scss";

import BackButton from "../../../components/backButton/BackButton";
import SidangTerbukaSenat from "../../../components/gallery/GallerySTS";
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import MelioraYellow from '../../../images/logo/meliora yellow.svg';

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

const HariSTS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
        className="hari-sts"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <BackButton />
        <motion.div variants={itemVariants}>
            <Header 
                image={MelioraYellow}
                top="Sidang Terbuka Senat"
                bottom="Sidang Terbuka Senat menandai langkah awal bagi mahasiswa baru Universitas Multimedia Nusantara angkatan 2024. Rektor UMN, Dr. Ninok Leksono, secara resmi meresmikan status para Pejuang Lotus Biru sebagai mahasiswa."
            />
        </motion.div>
        <motion.div variants={itemVariants}>
            <SidangTerbukaSenat />
        </motion.div>
        <FloatingParticle />
    </motion.div>
  );
}
 
export default HariSTS;
