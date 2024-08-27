import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './BottomNav.scss';

// Import icons
import Arrow from '../../images/Arrow/Arrow_Right_MD_purple.svg';
import HariPelaksaanNotActive from '../../images/icons/navigation/hari_pelaksanaan_not_active.svg';
import HariPelaksaanActive from '../../images/icons/navigation/hari_pelaksanaan_active.svg';
import DibalikKepanitiaanActive from '../../images/icons/navigation/dibalik_kepanitiaan_active.svg';
import DibalikKepanitiaanNotActive from '../../images/icons/navigation/dibalik_kepanitiaan_not_active.svg';
import FotoDivisiNotActive from '../../images/icons/navigation/foto_divisi_not_active.svg';
import FotoDivisiActive from '../../images/icons/navigation/foto_divisi_active.svg';
import SayembaraVisualNotActive from '../../images/icons/navigation/sayembara_visual_not_active.svg';
import SayembaraVisualActive from '../../images/icons/navigation/sayembara_visual_active.svg';

const tabsConfig = [
    { path: '/', icon: HariPelaksaanNotActive, activeIcon: HariPelaksaanActive, text: 'Hari Pelaksanaan' },
    { path: '/dibalik-kepanitiaan', icon: DibalikKepanitiaanNotActive, activeIcon: DibalikKepanitiaanActive, text: 'Di Balik Kepanitiaan' },
    { path: '/divisi', icon: FotoDivisiNotActive, activeIcon: FotoDivisiActive, text: 'Foto Divisi' },
    { path: '/sayembara-visual', icon: SayembaraVisualNotActive, activeIcon: SayembaraVisualActive, text: 'Sayembara Visual' },
];

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(location.pathname);
    const [subMenu, setSubMenu] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    


    // Path-path spesifik untuk Hari Pelaksanaan
    const hariPelaksanaanPaths = [
        '/hari-pelaksanaan/sio',
        '/hari-pelaksanaan/hari-pemupukan',
        '/hari-pelaksanaan/perkembangan-hari-1',
        '/hari-pelaksanaan/perkembangan-hari-2',
        '/hari-pelaksanaan/sidang-terbuka-senat'
    ];

    const isNotMainPath = !['/', '/dibalik-kepanitiaan', '/divisi', '/sayembara-visual'].includes(location.pathname);
    const isHariPelaksanaanPath = hariPelaksanaanPaths.includes(location.pathname) || location.pathname.startsWith('/hari-pelaksanaan');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        // Set active tab based on current path
        if (isHariPelaksanaanPath) {
            setActiveTab('/');
        } else {
            setActiveTab(location.pathname);
        }
        setSubMenu(null);
    }, [location.pathname]);

    const handleTabClick = (tab) => (e) => {
        e.preventDefault();
        if (tab.subMenu) {
            if (subMenu === tab.text) {
                setIsClosing(true);
                setTimeout(() => {
                    setSubMenu(null);
                    setIsClosing(false);
                }, 500);
            } else {
                setSubMenu(tab.text);
            }
        } else if (tab.path) {
            setActiveTab(tab.path);
            window.location.href = tab.path;
            if (subMenu) {
                setIsClosing(true);
                setTimeout(() => {
                    setSubMenu(null);
                    setIsClosing(false);
                }, 500);
            }
        }
    };

    const afterMovieButton = () => {
        window.location.href = 'https://www.youtube.com/@OMBUMN';
    };

    const getActiveTabInfo = (path) => {
        return tabsConfig.find(tab => tab.path === path) || null;
    };

    const activeTabInfo = getActiveTabInfo(activeTab);

    return (
        <div className='the-whole-navbar'>
            <nav className="navigation-bar">
                {isNotMainPath && (
                    <div className='back-button' onClick={() => navigate(-1)}>
                        <img src={Arrow} alt="Back" />
                        <p>Kembali</p>
                    </div>
                )}
                {tabsConfig.map((tab, index) => (
                    <div key={index} onClick={handleTabClick(tab)}>
                        <Link
                            className={`each-tab ${tab.path === activeTab ? 'active' : ''}`}
                            to={tab.path || '#'}
                            onClick={(e) => {
                                e.preventDefault();
                                handleTabClick(tab)(e);
                            }}
                            style={{ textDecoration: "none" }}
                        >
                            <img src={activeTabInfo && (tab.path === activeTab) ? activeTabInfo.activeIcon : tab.icon} alt={tab.text} />
                            {(tab.path === activeTab) && <p>{tab.text}</p>}
                            <div className='tooltip'>{tab.text}</div>
                        </Link>
                    </div>
                ))}
                <div className='the-border'>
                    <div className='movie-button' onClick={afterMovieButton}>
                        <p>After Movie</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default BottomNav;
