import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NavigationBar.scss';

// Import icons
import hariPelaksanaan from '../../images/navbar-icon/hari pelaksanaan.svg';
import diBalikKepanitiaan from '../../images/navbar-icon/di balik kepanitiaan.svg';
import fotoDivisi from '../../images/navbar-icon/foto divisi.svg';
import sayembaraVisual from '../../images/navbar-icon/sayembara visual.svg';

// Configuration for tabs
const tabsConfig = [
    {
        path: '/hari-pelaksanaan',
        icon: hariPelaksanaan,
        text: 'Hari Pelaksanaan'
    },
    {
        path: '/foto-divisi',
        icon: fotoDivisi,
        text: 'Foto Divisi'
    },
    {
        path: '/di-balik-kepanitiaan',
        icon: diBalikKepanitiaan,
        text: 'Di Balik Kepanitiaan'
    },
    // Uncomment if you want to use this tab
    // {
    //     path: '/sayembara-visual',
    //     icon: sayembaraVisual,
    //     text: 'Sayembara Visual'
    // },
];

const NavigationBar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    // Variants for tab animations
    const tabVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: index => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
            }
        })
    };

    // Variants for navbar animation
    const navbarVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <motion.nav
            className='navbar'
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            {tabsConfig.map((tab, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={tabVariants}
                    custom={index}
                    className={`each-tab ${tab.path === activeTab ? 'active' : ''} ${index === 0 ? 'first-tab' : ''}`}
                >
                    <Link
                        to={tab.path}
                        style={{ textDecoration: "none", color: 'inherit' }}
                    >
                        <img src={tab.icon} alt={tab.text} />
                        <p>{tab.text}</p>
                    </Link>
                </motion.div>
            ))}
        </motion.nav>
    );
};

export default NavigationBar;
