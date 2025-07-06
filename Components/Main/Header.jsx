import React, { useState } from 'react';
import HeaderListItems from './HeaderListItems';
import {Icon} from '@iconify/react';

const Header = () => {
    const [openTab, setOpenTab] = useState(false);

    const arrays = {
        "Development": [
            {link: '/landing', name: 'Landing-page'},
            {link: '/shop', name: 'Интернет-магазин'},
            {link: '/corporate', name: 'Копоративный'}
        ],
        "About": [],
        "Others": []
    }

    const [xPos,setXPos] = useState(null);
    const [selectedTab, setSelectedTab] = useState(null);
    return (
        <>
            <div className='header-component'>
                <div className='header-container'>
                    <div className='header-logo-item'>
                        <Icon className='icon' icon="bxs:up-arrow" width="50" height="50"/>
                        <div className='header-logo-name'>IT<span>s</span></div>
                    </div>
                    <div className={`header-item`}>Главная</div>
                    <div onMouseEnter={(e)=>{setOpenTab(!openTab); setSelectedTab(selectedTab===null?"Development":null); setXPos()}} className={`header-item ${selectedTab=="Development"?'active':''}`}>
                        Разработка
                        <Icon className='icon' icon="bxs:up-arrow" width="30" height="30"/>
                    </div>
                    <div className='header-item'>Продвижение</div>
                    <div onClick={()=>{setOpenTab(!openTab); setSelectedTab(selectedTab===null?"Others":null)}} className='header-item'>
                        Другие услуги
                        <Icon className='icon' icon="bxs:up-arrow" width="30" height="30"/>
                    </div>
                    <div onClick={()=>{setOpenTab(!openTab); setSelectedTab(selectedTab===null?"About":null)}} className='header-item'>
                        О компании
                        <Icon className='icon' icon="bxs:up-arrow" width="30" height="30"/>
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
            {
                openTab === true && <HeaderListItems x={xPos} setX={setXPos} setOpen={setOpenTab} setSelect={setSelectedTab} arr={arrays[selectedTab]} />
            }
        </>
    );
};

export default Header;