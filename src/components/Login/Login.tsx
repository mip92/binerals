import React from 'react';
import {Button, Input} from "@material-ui/core";
import {useInput} from "../../hooks/useInput";
import s from './login.module.css'
import {useNavigate} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";
import User from "../../store/userState";

const Login = () => {
    const navigate = useNavigate();
    const email = useInput('')
    const password = useInput('')
    const [loggingIn, isLoading, error] = useFetching(async () => {
            console.log(process.env.REACT_APP_SERVER_URL)
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login/`, {
                email: email.value,
                password: password.value
            }).then(response => {
                    User.changeName(response.data.email)
                    User.changePicture(response.data.image)
                    localStorage.setItem('email', response.data.email)
                    navigate('/')
                }
            )
        }
    )
    const login = () => {
        // @ts-ignore
        loggingIn()
    }

    if (isLoading) return <div>Загрузка</div>
    else return (<div className={s.wrapper}>
            <Input {...email}
                   placeholder="Email"
                   color="primary"
                   inputProps={{'aria-label': 'description'}}
                   className={s.email}
            />
            <Input {...password}
                   type='password'
                   placeholder="Password"
                   color="primary"
                   inputProps={{'aria-label': 'description'}}
                   className={s.name}
            />
            <Button onClick={() => login()}>Login</Button>
            {error && <div className={s.error}>{error}</div>}
        </div>
    );
};

export default Login;