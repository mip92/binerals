import React, {FC, useEffect, useRef, useState} from 'react';
import s from "./Main.module.css";
import SideBarMenu from "../../Store/sideBarState";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Main: FC = observer(() =>{
    let navigate = useNavigate();
    const { height, width } = useWindowDimensions();
    useEffect(()=>{
        const password = localStorage.getItem('password');
        const email = localStorage.getItem('email');
        if (!password || !email) navigate('/login')
    },[])
        function handler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            // @ts-ignore
            if (e.target == referance.current.firstChild || e.target.parentNode === referance.current.firstChild || e.target.parentNode.parentNode === referance.current.firstChild) {
                SideBarMenu.changeSideBarActive(true)
            }
            // @ts-ignore
            else if (e.target != referance.current) {
                SideBarMenu.changeSideBarActive(false)
            }
        }

        const referance = useRef(null);

    return (

            <div className={s.wrapper}
                /*@ts-ignore*/
                 style={width>320 ? {'gridTemplateColumns': `${!SideBarMenu.sideBarActive ? '60px calc(100% - 60px)' : '300px calc(100% - 300px)'}`}
                 : {'gridTemplateColumns': `${!SideBarMenu.sideBarActive ? 'auto' : '20px auto'}`}}>
                <div className={s.header}>
                    <Header/>
                </div>
                <div ref={referance} className={s.sidebar}>
                    <SideBar/>
                </div>
                <div className={s.content} style={{display:`${window.innerWidth<=320 && SideBarMenu.sideBarActive ? 'none' :'grid'}`}}>
                    <Content/>
                </div>
                <div className={s.footer} style={{backgroundColor:`${window.innerWidth<=320 && SideBarMenu.sideBarActive ? 'black' :'#555B6E'}`}}>
                    <Footer/>
                </div>
            </div>
        );
    }
)

export default Main;