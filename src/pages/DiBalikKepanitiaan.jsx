import React, { useEffect } from "react";
import { motion } from "framer-motion";
import './HariPelaksanaan/perkembangan-hari-1/PerkembanganHariSatu.scss';

import GalleryDK from "../components/gallery/GalleryDK";
import Header from "../components/header/Header";
import FloatingParticle from "../components/particles/FloatingParticle";

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

const DiBalikKepanitiaan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
        className="perkembangan-hari-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <motion.div variants={itemVariants}>
            <Header 
                top="Dibalik Kepanitiaan"
            />
        </motion.div>
        <motion.div variants={itemVariants}>
            <GalleryDK />
        </motion.div>
        <FloatingParticle />
    </motion.div>
  );
}

export default DiBalikKepanitiaan;