import React, { useState } from 'react';
import HeaderListItems from './HeaderListItems';
import { Icon } from '@iconify/react';

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
            {link: '/other-works', name: 'Доработки сайтов'},
            {link: '/smm',name:'SMM-продвижение'}
        ]
    }

    const [xPos, setXPos] = useState(null);
    const [selectedTab, setSelectedTab] = useState(null);
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
                    <div className={`header-item`} onMouseEnter={(e)=>{
                        setOpenTab(false);
                        setSelectedTab(null);
                        setXPos(null);
                    }}>Главная</div>
                    <div onMouseEnter={(e) => {
                        setOpenTab(true);
                        setSelectedTab("Development");
                        setXPos(e.currentTarget.getBoundingClientRect().left)
                    }}
                        className={`header-item ${selectedTab == "Development" ? 'active' : ''}`}>
                        Разработка
                        <Icon className='icon' icon="bxs:up-arrow" style={{transform: `rotate(${selectedTab==='Development'?'180deg':'0'})`}} width="2vw" height="2vw" />
                    </div>
                    <div className='header-item' onMouseEnter={(e)=>{
                        setOpenTab(false);
                        setSelectedTab(null);
                        setXPos(null);
                    }}>Продвижение</div>
                    <div onMouseEnter={(e)=>{
                        setOpenTab(true);
                        setSelectedTab("Others");
                        setXPos(e.currentTarget.getBoundingClientRect().left + window.innerWidth*0.01)
                    }} className={`header-item ${selectedTab == 'Others' ? 'active' : ""}`}>
                        Другие услуги
                        <Icon className='icon' icon="bxs:up-arrow" width="2vw" height="2vw" />
                    </div>
                    <div onMouseEnter={(e)=>{
                        setOpenTab(true);
                        setSelectedTab("About");
                        setXPos(e.currentTarget.getBoundingClientRect().left + window.innerWidth*0.02)
                    }} className={`header-item ${selectedTab =='About' ? 'active':''}`}>
                        О компании
                        <Icon className='icon' icon="bxs:up-arrow" width="2vw" height="2vw" />
                    </div>
                    <div className='header-item'>Контакты</div>
                    <div className='header-social-link'></div>
                    <div className='header-social-link'></div>
                    <div className='header-contacts'>
                        <h4>+375297853825</h4>
                        <h4>its-agency@outlook.com</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;