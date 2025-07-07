import React from 'react';
import { Helmet } from 'react-helmet';
import HomeHeadBanner from '../../Components/Home/HomeHeadBanner';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>ITs | Главная</title>
                <meta name='description' content='Заказать сайт под ключ в минимальные сроки с уникальным дизайном и полным юридическим оформлением. ' />
                <meta name='keywords' content='Сайт, разработка, лендинг, интернет-магазин, айти, под ключ, веб-приложение, цена, заказать' />
                <meta name='Document-state' content='Dynamic' />
                <meta name='Author' content='ITs' />
            </Helmet>
            <div className='home page'>
                <HomeHeadBanner />
                <div className='page-content'>
                    faaf
                </div>
            </div>
        </>
    );
};

export default HomePage;