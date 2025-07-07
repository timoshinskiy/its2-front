import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>ITs | О компании</title>
                <meta name='description' content='Заказать сайт под ключ в минимальные сроки с уникальным дизайном и полным юридическим оформлением. ' />
                <meta name='keywords' content='Сайт, разработка, лендинг, интернет-магазин, айти, под ключ, веб-приложение, цена, заказать' />
                <meta name='Document-state' content='Dynamic' />
                <meta name='Author' content='ITs' />
            </Helmet>
            <div className='page'>
                <h1>About page</h1>
            </div>
        </>
    );
};

export default AboutPage;