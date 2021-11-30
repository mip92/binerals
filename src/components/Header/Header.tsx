import React, {FC, useRef} from 'react';
import s from './Header.module.css';
import icon from '../../images/icons/img.png'
import close from '../../images/icons/img_1.png'
import HeaderMenu from "../../store/headerState";
import SideBarMenu from "../../store/sideBarState";

import {observer} from "mobx-react-lite";
import User from '../../store/userState'
import MyAccordion from "./MyAccordion";


const Header: FC = observer(() => {
        const referance = useRef(null);
        function handler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            // @ts-ignore
            if (e.target === referance.current.firstChild || e.target.parentNode === referance.current.firstChild || e.target.parentNode.parentNode === referance.current.firstChild) {
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
                        ? <img src={close} alt='close'
                               onClick={()=>SideBarMenu.changeSideBarActive(false)}
                        />
                        : <img src={icon} alt='icon'
                               onClick={()=>SideBarMenu.changeSideBarActive(true)}
                        />}
                </div>

                <div className={s.avatar} ref={referance} onMouseOver={(e) => handler(e)} >
                    <img src={User.picture} alt='avatar'/>
                </div>
                <div className={s.name}>
                    <h4>{User.name}</h4>
                </div>

                <div className={s.acc} style={{'display': `${HeaderMenu.headerActive ? 'flex' : 'none'}`}}>
                    <MyAccordion/>
                </div>
            </div>
        );
    }
)


export default Header;