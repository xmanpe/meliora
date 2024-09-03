import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./ForumOMB.scss";

import GalleryForumOMB from "../../../components/gallery/GalleryForumOMB";
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

const ForumOMB = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="forum-omb"
      variants={containerVariants}
      initial="hidden"
      animate="visible"  
    >
      <BackButton />
      <motion.div variants={itemVariants}>
        <Header 
          image={MelioraYellow}
          top="Forum OMB"
          bottom={'Forum untuk memberikan segala kritik, saran, dan pertanyaan seputar OMB UMN 2024 dengan tujuan agar OMB UMN kedepannya dapat menjadi lebih baik lagi.'}
        />
      </motion.div>
      <motion.div style={{width: '100%'}} variants={itemVariants}>
        <AksesDrive href={'https://drive.google.com/drive/folders/1bQZG5DcILoEuE_SrApVoX2yS3S4rmTzV'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <GalleryForumOMB />
      </motion.div>
      <FloatingParticle />
    </motion.div>
  );
}
 
export default ForumOMB;