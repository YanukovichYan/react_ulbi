import React, {useContext, useEffect} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()

    const {userAuth, setUserAuth, name} = useContext(AuthContext)
    console.log(userAuth)



    function login(e) {
        e.preventDefault()
        setUserAuth(true)
    }

    useEffect(() => {
        if (userAuth) {
            navigate('/posts')
        }
    }, [userAuth])


    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="text" placeholder="Введите пароль"/>
                {/*<MyButton onClick={(e) => LogIn(e)}>*/}
                <MyButton>
                    Log In
                </MyButton>
            </form>
        </div>
    );
};

