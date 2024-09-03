import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./PerkembanganHariDua.scss";

import BackButton from "../../../components/backButton/BackButton";

import PerkembanganHari2 from "../../../components/gallery/GalleryHari2";
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import MelioraYellow from '../../../images/logo/meliora yellow.svg'

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

const PerkembanganHariDua = () => {
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
      <BackButton />
      <motion.div variants={itemVariants}>
        <Header 
          image={MelioraYellow}
          top="Perkembangan Hari 2"
          bottom="Bibit yang telah disemai kini kokoh, siap mewujudkan impian. Setiap tahapan memastikan peserta menjadi individu percaya diri yang berbekal semangat sesuai dengan konsep ‘Tidak Ada Tentang Kita, Tanpa Kita’."
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <PerkembanganHari2 />
      </motion.div>
      <FloatingParticle />
    </motion.div>
  );
}

export default PerkembanganHariDua;