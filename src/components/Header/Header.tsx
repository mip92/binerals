import React, {FC, useRef} from 'react';
import s from './Header222222.module.css';
import icon from '../../images/icons/img.png'
import close from '../../images/icons/img_1.png'
import poligon from '../../images/img/Polygon 1.png'
import HeaderMenu from "../../store/headerState";
import SideBarMenu from "../../store/sideBarState";
import {observer} from "mobx-react-lite";
import User from '../../store/userState'
import MyAccordion from "./MyAccordion";


const Header: FC = observer(() => {
        const avatarReference = useRef(null);
        const accordionReference = useRef(null);

        function enterDivListener(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            HeaderMenu.changeHeaderActive(true)
        }

        const leaveDivListener = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            HeaderMenu.changeHeaderActive(false)
        }

        return (
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <h2>Logo</h2>
                </div>
                <div className={s.icon}>
                    {SideBarMenu.sideBarActive
                        ? <img src={close} alt='close'
                               onClick={() => SideBarMenu.changeSideBarActive(false)}
                        />
                        : <img src={icon} alt='icon'
                               onClick={() => SideBarMenu.changeSideBarActive(true)}
                        />}
                </div>

                <div className={s.avatar} ref={avatarReference}
                     onMouseLeave={(e) => leaveDivListener(e)}
                     onMouseEnter={(e) => enterDivListener(e)}>
                    <img src={User.picture} alt='avatar'/>
                </div>

                <span className={s.name}>
                    <h4>{User.name}</h4>
                </span>
                <div className={s.acc} ref={accordionReference}
                     onMouseLeave={(e) => leaveDivListener(e)}
                     onMouseEnter={(e) => enterDivListener(e)}
                     style={{'display': `${HeaderMenu.headerActive ? 'flex' : 'none'}`}}>
                    <MyAccordion/>
                </div>
                <div className={s.arrow} >
                    <img src={poligon}
                         alt='poligon'
                         style={{'transform': `${HeaderMenu.headerActive ? 'rotate(180deg)' : 'rotate(0deg)'}`}}
                    />
                </div>
            </div>
        );
    }
)


export default Header;