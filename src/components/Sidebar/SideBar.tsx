import React from 'react';
import s from './SibeBar.module.css'
import so from './SibeBarOpen.module.css'
import home from '../../images/img/img_2.png'
import vector from '../../images/img/img_1.png'
import gear from '../../images/img/img.png'
import door1 from '../../images/img/img_3.png'
import SideBarMenu from "../../store/sideBarState";
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import User from '../../store/userState'


const SideBar = () => {
    const {width } = useWindowDimensions()
    const navigate = useNavigate();
    const deleteLocalStorage=()=> {
        localStorage.removeItem('password');
        localStorage.removeItem('email');
        navigate('/login')
    }
    return (
        <div className={!SideBarMenu.sideBarActive ? s.main : so.main}>
            <div className={!SideBarMenu.sideBarActive ? s.home : so.home}>
                <img alt='home' className={!SideBarMenu.sideBarActive ? s.homeIcon : so.homeIcon} src={home}/>
                <div className={!SideBarMenu.sideBarActive ? s.homeName : so.homeName}>Home</div>
            </div>
            <div className={!SideBarMenu.sideBarActive ? s.vector : so.vector}>
                <img alt='vector' className={!SideBarMenu.sideBarActive ? s.vectorIcon : so.vectorIcon} src={vector}/>
                <div className={!SideBarMenu.sideBarActive ? s.vectorName : so.vectorName}>Chat</div>
            </div>
            <div className={!SideBarMenu.sideBarActive ? s.gear : so.gear}>
                <img alt='gear' className={!SideBarMenu.sideBarActive ? s.gearIcon : so.gearIcon} src={gear}/>
                <div className={!SideBarMenu.sideBarActive ? s.gearName : so.gearName}>Settings</div>
            </div>
            <div className={!SideBarMenu.sideBarActive ? s.door : so.door}
                 onClick={() =>deleteLocalStorage() }
            >
                <img alt='door' className={!SideBarMenu.sideBarActive ? s.doorIcon : so.doorIcon} src={door1}/>
                <div className={!SideBarMenu.sideBarActive ? s.doorName : so.doorName}>Logout</div>
            </div>
            <div className={width>320 ? s.avatar : SideBarMenu.sideBarActive ? so.avatar : s.avatar}>
                <img className={so.avatarIcon} src={User.picture} alt='ava'/>
                <div className={so.avatarName}>{User.name}</div>
            </div>
        </div>
    );
};

export default SideBar;