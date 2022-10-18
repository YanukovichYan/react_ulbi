import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./routes/AppRouter";
import {AuthContext} from "./context";


function App() {

    const[userAuth, setUserAuth] = useState(localStorage.getItem('auth'))

    useEffect(() => {
        localStorage.setItem('auth', `${userAuth}`)
    }, [userAuth])

    return (
        <AuthContext.Provider value={{
            userAuth,
            setUserAuth,
            name: "Alex"
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
