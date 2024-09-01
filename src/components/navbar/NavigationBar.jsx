import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.scss';

// Import icons
import hariPelaksanaan from '../../images/navbar-icon/hari pelaksanaan.svg';
import diBalikKepanitiaan from '../../images/navbar-icon/di balik kepanitiaan.svg';
import fotoDivisi from '../../images/navbar-icon/foto divisi.svg';
import sayembaraVisual from '../../images/navbar-icon/sayembara visual.svg';

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
    {
        path: '/sayembara-visual',
        icon: sayembaraVisual,
        text: 'Sayembara Visual'
    },
];

const NavigationBar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const getActiveTabInfo = (path) => {
        return tabsConfig.find(tab => tab.path === path) || null;
    };

    const activeTabInfo = getActiveTabInfo(activeTab);

    return (
        <nav className='navbar'>
            {tabsConfig.map((tab, index) => (
                <Link
                    key={index}
                    className={`each-tab ${tab.path === activeTab ? 'active' : ''} ${index === 0 ? 'first-tab' : ''}`}
                    to={tab.path}
                    style={{ textDecoration: "none" }}
                >
                    <img src={tab.icon} alt={tab.text} />
                    <p>{tab.text}</p>
                </Link>
            ))}
        </nav>
    );
};

export default NavigationBar;