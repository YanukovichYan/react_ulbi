import React from 'react';
import {lazily} from "react-lazily";
import {Navigate, Route, Routes} from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import {PrivateRoutes} from "./PrivateRoutes";

const {About} = lazily(() => import('../pages/About'))
const {Posts} = lazily(() => import('../pages/Posts'))
const {Error} = lazily(() => import('../pages/Error'))
const {PagePostId} = lazily(() => import('../pages/PagePostId'))
const {Login} = lazily(() => import('../pages/Login'))

const AppRouter = () => {

    return (
        <React.Suspense fallback={<Loader/>}>
            <Routes>

                <Route index element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>

                <Route element={<PrivateRoutes/>}>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/posts/:id" element={<PagePostId/>}/>
                </Route>

                <Route path="/error" element={<Error/>}/>
                <Route path="*" element={<Navigate to="/error"/>}/>

            </Routes>
        </React.Suspense>
    );
};

export default AppRouter;