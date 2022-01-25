import React from 'react';
import image from '../../images/error404.jpg'
import style from './Error404.module.css'

const Error404 = () => {

    return (
        <div className={style.errorPage}>
            <img src={image} alt='error'/>
        </div>
    );
};

export default Error404;