import React, {useContext} from 'react';
import Loader from "../components/UI/Loader/Loader";
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "../context";

export const PrivateRoutes = () => {
    const {userAuth, setUserAuth, name} = useContext(AuthContext)

    return (
        <React.Suspense fallback={<Loader/>}>
            {userAuth ? <Outlet/> : <Navigate to="/about" />}
        </React.Suspense>
    );
};

