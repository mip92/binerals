import React from 'react';
import s from './SibeBar.module.css'
import so from './SibeBarOpen.module.css'
import home from '../../Images/img/img_2.png'
import vector from '../../Images/img/img_1.png'
import gear from '../../Images/img/img.png'
import door1 from '../../Images/img/img_3.png'
import SideBarMenu from "../../Store/sideBarState";
import {useNavigate} from "react-router-dom";
import ava from "../../Images/img/ava.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";


const SideBar = () => {
    const { height, width } = useWindowDimensions()
    let navigate = useNavigate();
    return (
        <div className={!SideBarMenu.sideBarActive ? s.main : so.main}>
            <div className={!SideBarMenu.sideBarActive ? s.home : so.home}>
                <img className={!SideBarMenu.sideBarActive ? s.homeIcon : so.homeIcon} src={home}/>
                <div className={!SideBarMenu.sideBarActive ? s.homeName : so.homeName}>Home</div>
            </div>
            <div className={!SideBarMenu.sideBarActive ? s.vector : so.vector}>
                <img className={!SideBarMenu.sideBarActive ? s.vectorIcon : so.vectorIcon} src={vector}/>
                <div className={!SideBarMenu.sideBarActive ? s.vectorName : so.vectorName}>Chat</div>
            </div>
            <div className={!SideBarMenu.sideBarActive ? s.gear : so.gear}>
                <img className={!SideBarMenu.sideBarActive ? s.gearIcon : so.gearIcon} src={gear}/>
                <div className={!SideBarMenu.sideBarActive ? s.gearName : so.gearName}>Settings</div>
            </div>
            <div className={!SideBarMenu.sideBarActive ? s.door : so.door}
                 onClick={() => {
                     localStorage.removeItem('password');
                     localStorage.removeItem('email');
                     navigate('/login')
                 }}
            >
                <img className={!SideBarMenu.sideBarActive ? s.doorIcon : so.doorIcon} src={door1}/>
                <div className={!SideBarMenu.sideBarActive ? s.doorName : so.doorName}>Logout</div>
            </div>

            <div className={width>320 && SideBarMenu.sideBarActive ? s.avatar : so.avatar}>
                <img className={so.avatarIcon} src={ava}/>
                <div className={so.avatarName}>Name</div>
            </div>
        </div>
    );
};

export default SideBar;