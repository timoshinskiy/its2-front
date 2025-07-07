import React from 'react';
import { Helmet } from 'react-helmet';


const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>ITS | Услуги по веб-разработке </title>
                <meta name='description' content='Виды веб-разработки сайтов на территории Гродно и Минска. Разработка лендинга. Разработка интернет-магазина. Разработка корпоративного сайта' />
                <meta name='keywords' content='Сайт, разработка, лендинг, интернет-магазин, айти, под ключ, веб-приложение, цена, заказать, варианты' />
                <meta name='Document-state' content='Dynamic' />
                <meta name='Author' content='ITs' />
            </Helmet>
            <div className='page'>
                <h1>Виды оказываемых наши услуг по веб-разработке для вашего бизнеса</h1>
            </div>
        </>
    );
};

export default ServicesPage;