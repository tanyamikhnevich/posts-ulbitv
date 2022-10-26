import React, {useContext} from 'react';
import {MyInput} from "../components/UI/input/my-input";
import {MyButton} from "../components/UI/button/my-button";
import {AuthContext} from "../context";

export const Login = () => {
    const { setIsAuth} = useContext(AuthContext)
    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type={'text'} placeholder={'login'}/>
                <MyInput type={'password'} placeholder={'password'}/>
                <MyButton title={'Login'}/>
            </form>

        </div>
    );
};