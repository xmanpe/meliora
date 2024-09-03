import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./HariPemupukan.scss";

import HariPemupukan from '../../../components/gallery/GalleryPemupukan';
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import MelioraYellow from '../../../images/logo/meliora yellow.svg'

import BackButton from "../../../components/backButton/BackButton";

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

const HariPemupukanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="hari-pemupukan"
      variants={containerVariants}
      initial="hidden"
      animate="visible"  
    >
      <BackButton />
      <motion.div variants={itemVariants}>
        <Header 
          image={MelioraYellow}
          top="Hari Pemupukan"
          bottom="Pada rangkaian ini, peserta lebih mengenal dan mendapatkan informasi tambahan mengenai OMB UMN 2024 agar lebih siap mengikuti rangkaian secara luring/offline."
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <HariPemupukan />
      </motion.div>
      <FloatingParticle />
    </motion.div>
  );
}
 
export default HariPemupukanPage;