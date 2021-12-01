import React from 'react';
import s from './Content.module.css'

const Content = () => {
    return (
        <div className={s.main}>
            <h1 style={{'paddingLeft':'20px'}} >Home title
                </h1>
            <div className={s.break}>Home page content</div>
        </div>

    );
};

export default Content;