import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div>
        <div className={s.container}>
            <div className={s.block}>Home</div>
            <div className={s.block}>Chat</div>
            <div className={s.block}>Settings</div>
        </div>
            <div className={s.container}>
                <div className={s.block2}>@Copyright 2020</div>
            </div>
        </div>
    );
};

export default Footer;