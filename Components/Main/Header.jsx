import React, { useEffect, useState } from 'react';
import HeaderListItems from './HeaderListItems';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router';

const Header = () => {
    const [openTab, setOpenTab] = useState(false);

    const arrays = {
        "Development": [
            { link: '/landing', name: 'Landing-page' },
            { link: '/shop', name: 'Интернет-магазин' },
            { link: '/corporate', name: 'Копоративный' }
        ],
        "About": [],
        "Others": [
            { link: '/other-works', name: 'Доработки сайтов' },
            { link: '/smm', name: 'SMM-продвижение' }
        ]
    }

    // onMouseEnter={(e) => {
    //                     setOpenTab(true);
    //                     setSelectedTab("Development");
    //                     setXPos(e.currentTarget.getBoundingClientRect().left - window.innerWidth*0.005)
    //                 }}
    const [xPos, setXPos] = useState(null);
    const [selectedTab, setSelectedTab] = useState(null);
    const curLocation = useLocation();
    return (
        <>
            {
                openTab === true && <HeaderListItems x={xPos} setX={setXPos} setOpen={setOpenTab} setSelect={setSelectedTab} arr={arrays[selectedTab]} />
            }
            <div className='header-component' >
                <div className='header-container'>
                    <div className='header-logo-item'>
                        <Icon className='icon' icon="bxs:up-arrow" width="50" height="50" />
                        <div className='header-logo-name'>IT<span>s</span></div>
                    </div>
                    <Link to={'/'} className={`header-item ${curLocation.pathname == '/' ? 'active' : ''}`}>
                        Главная
                        <Icon className='icon' icon="bxs:up-arrow" width="2vw" height="2vw" />

                    </Link>
                    <Link to='/services' className={`header-item ${curLocation.pathname == "/services" || curLocation.pathname.includes('service') ? 'active' : ''}`}>
                        Услуги
                        <Icon className='icon' icon="bxs:up-arrow" width="2vw" height="2vw" />
                    </Link>
                    <Link to='/about' className={`header-item ${curLocation.pathname == '/about' ? 'active' : ""}`}>
                        О нас
                        <Icon className='icon' icon="bxs:up-arrow" width="2vw" height="2vw" />
                    </Link>
                    <Link to={'/contacts'} className={`header-item ${curLocation.pathname == '/contacts' ? 'active' : ''}`}>
                        Контакты
                        <Icon className='icon' icon="bxs:up-arrow" width="2vw" height="2vw" />
                    </Link>
                    <Link to={'/vacancies'} className={`header-item ${curLocation.pathname == '/vacancies' ? 'active' : ''}`}>
                        Вакансии
                        <Icon className='icon' icon="bxs:up-arrow" width="2vw" height="2vw" />
                    </Link>

                    <div className='header-contacts'>
                        <div className='header-social-links'>
                            <a href='https://instagram.com/its_belarus' target='_blank' title='Instagram ITs'><Icon className='header-social-link' icon="line-md:instagram" width="2.5vw" height="2.5vw" /></a>
                            <a href='https://t.me/timoshinski' target='_blank' title='Manager ITs telegram'><Icon className='header-social-link' icon="gravity-ui:logo-telegram" width="2.5vw" height="2.5vw" /></a>
                        </div>
                        <div className='header-contacts-phones'>
                            <h4>+375297853825</h4>
                            <h4>its-agency@outlook.com</h4>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;