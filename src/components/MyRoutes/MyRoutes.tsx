import React, {useEffect} from 'react';
import Main from "../Main/Main";
import Login from "../Login/Login";
import User from "../../store/userState";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";

const MyRoutes = () => {
    const navigate = useNavigate();
    const [loggingIn] = useFetching(async () => {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login/`, {
                email: localStorage.getItem('email'),
                password: 111111 //здесь должен быть код с токеном
            }).then(response => {
                    User.changeName(response.data.user.email)
                    User.changePicture(`http://localhost:5000/${response.data.user.image}`)
                    localStorage.setItem('email', response.data.user.email)
                    navigate('/')
                }
            )
        }
    )
    useEffect(() => {
        // @ts-ignore
        loggingIn()
    }, [])
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
};

export default MyRoutes;