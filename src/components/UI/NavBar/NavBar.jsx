import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const NavBar = () => {

    const {userAuth, setUserAuth, name} = useContext(AuthContext)

    return (
        <div className='navBar'>

            <div className='navBarLinks'>
                <Link style={{marginRight: '15px'}} to="/about">О сайте</Link>
                <Link style={{marginRight: '15px'}} to="/posts">Посты</Link>
                {
                    userAuth
                        ? <MyButton
                        onClick={() => setUserAuth(false)}
                        >
                            Log Out
                        </MyButton>
                        : <Link style={{marginRight: '15px'}} to="/login">Log In</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;