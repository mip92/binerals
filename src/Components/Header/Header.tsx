import React, {FC, useEffect, useRef, useState} from 'react';
import s from './Header.module.css';
import icon from '../../Images/Icons/img.png'
import x from '../../Images/Icons/img_1.png'
import ava from '../../Images/img/ava.jpg'
import HeaderMenu from "../../Store/headerState";
import SideBarMenu from "../../Store/sideBarState";
import Accordion from "./Accordion";
import {observer} from "mobx-react-lite";


const Header: FC = observer(() => {
        const referance = useRef(null);
        function handler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            // @ts-ignore
            if (e.target == referance.current.firstChild || e.target.parentNode === referance.current.firstChild || e.target.parentNode.parentNode === referance.current.firstChild) {
                HeaderMenu.changeHeaderActive(true)
            }
            else HeaderMenu.changeHeaderActive(false)
        }

        return (
            <div className={s.wrapper} >
                <div className={s.logo}>
                    <h2>Logo</h2>
                </div>
                <div className={s.icon} >
                    {SideBarMenu.sideBarActive
                        ? <img src={x} alt='sdsd'
                               onClick={()=>SideBarMenu.changeSideBarActive(false)}
                        />
                        : <img src={icon} alt='sdsd'
                               onClick={()=>SideBarMenu.changeSideBarActive(true)}
                        />}
                </div>

                <div className={s.avatar} ref={referance} onMouseOver={(e) => handler(e)} >
                    <img src={ava}/>
                </div>
                <div className={s.name}>
                    <h4>Name</h4>
                </div>

                <div className={s.acc} style={{'display': `${HeaderMenu.headerActive ? 'flex' : 'none'}`}}>
                    <Accordion/>
                </div>
            </div>
        );
    }
)


export default Header;