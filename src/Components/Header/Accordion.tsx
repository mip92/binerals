import React from 'react';
import s from './Accordion.module.css'
import {useNavigate} from "react-router-dom";

const Accordion = () => {
    let navigate = useNavigate();
    return (
        <div className={s.accordion}>
            <div className={s.first}>
                <div>Profile</div>
            </div>
            <div className={s.second}>
                <div>Photos</div>
            </div>
            <div className={s.third}>
                <div>Settings</div>
            </div>
            <div className={s.fourth}
                 onClick={()=>{localStorage.removeItem('password');
                     localStorage.removeItem('email');
                     navigate('/login')}}>
                <div>Exit</div>
            </div>
        </div>
    );
};

export default Accordion;