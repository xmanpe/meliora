import React from "react";
import { motion } from "framer-motion";
import "./SesiInformasiOMB.scss";

import SIO from '../../../components/gallery/GallerySIO';
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";
import MelioraYellow from '../../../images/logo/meliora yellow.svg'

import BackButton from "../../../components/backButton/BackButton";

import AksesDrive from "../../../components/aksesDrive/aksesDrive";

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

const SesiInformasiOMB = () => {
  return (
    <motion.div 
      className="sio"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <BackButton />
      <motion.div variants={itemVariants}>
        <Header 
          image={MelioraYellow}
          top="Sesi Informasi OMB"
          bottom="Sesi Informasi Orientasi Mahasiswa Baru yang dilaksanakan oleh divisi Caksana atau <i>Public Relations </i> bertujuan untuk memberikan seluruh informasi agar peserta dapat mempersiapkan kebutuhan rangkaian OMB UMN 2024."
        />
      </motion.div>
      <motion.div style={{width: '100%'}} variants={itemVariants}>
        <AksesDrive href={'https://drive.google.com/drive/folders/1YJ4mkwku5bDtaXM3s6BPgEYfRjf9kjGK'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SIO />
      </motion.div>
      <FloatingParticle />
    </motion.div>
  );
}
 
export default SesiInformasiOMB;
