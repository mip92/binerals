import React, {useEffect, useState} from 'react';
import {Button, Input} from "@material-ui/core";
import {useInput} from "../../hooks/useInput";
import s from './login.module.css'
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const email = useInput('')
    const password = useInput('')
    const [error, setError]=useState<string>('')
    const login=()=>{
        let e=validateEmail(email.value)
        let p=validatePassword(password.value)
        if(e.error==null && p.error==null) {
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            navigate('/')
        }
        else if(e.error!==null) {
            setError(e.error)
            setTimeout(async () => {
                setError('')
            }, 2000)
        }
        else if(p.error!==null){
            setError(p.error)
            setTimeout(async () => {
                setError('')
            }, 2000)
        }
    }
    function validateEmail(email:string): {error: string| null} {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!reg.test(email))return {error: 'email is not valid'}
        else return {error: null}
    }
    function validatePassword(password:string): {error: string| null} {
        var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (!passwordPattern.test(password)) return {error:"Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также состоять не менее из 8 символов"}
        else return {error: null}
    }
    return (
        <div className={s.wrapper}>
            <Input {...email}
                   placeholder="Email"
                   color="primary"
                   inputProps={{'aria-label': 'description'}}
                   className={s.email}
            />
            <Input {...password}
                   placeholder="Password"
                   color="primary"
                   inputProps={{'aria-label': 'description'}}
                   className={s.name}
            />
            <Button onClick={() => login()}>Login</Button>
            <div className={s.error}>{error}</div>
        </div>
    );
};

export default Login;