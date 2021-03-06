import React, {FC, useRef} from 'react';
import s from "./Main.module.css";
import SideBarMenu from "../../store/sideBarState";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import {observer} from "mobx-react-lite";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Main: FC = observer(() => {
        const {width} = useWindowDimensions();
        const referance = useRef(null);

        return (
            <div className={s.wrapper}
                 style={width > 320 ? {'gridTemplateColumns': `${!SideBarMenu.sideBarActive ? '60px calc(100% - 60px)' : '300px calc(100% - 300px)'}`}
                     : {'gridTemplateColumns': `${!SideBarMenu.sideBarActive ? 'auto' : '20px auto'}`}}>
                <div className={s.header}>
                    <Header/>
                </div>
                <div ref={referance} className={s.sidebar}>
                    <SideBar/>
                </div>
                <div className={s.content}
                     style={{display: `${window.innerWidth <= 320 && SideBarMenu.sideBarActive ? 'none' : 'grid'}`}}>
                    <Content/>
                </div>
                <div className={s.footer}
                     style={{backgroundColor: `${window.innerWidth <= 320 && SideBarMenu.sideBarActive ? 'black' : '#555B6E'}`}}>
                    <Footer/>
                </div>
            </div>
        );
    }
)

export default Main;