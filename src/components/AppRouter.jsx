import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './ui/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    // Чтобы роутер не работал на момент авторизации
    if(isLoading) {
        return <Loader />;
    }

    return (
        isAuth
            ? <Routes >
                {privateRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route path="/" element={<Navigate replace to="/about" />}/>
                <Route path="/*" element={<Navigate replace to="/error" />}/>
            </Routes>
            : <Routes >
                {publicRoutes.map((route, idx) =>
                    <Route
                        key={idx}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route path="/*" element={<Navigate replace to="/login" />}/>
            </Routes>
    );
};

export default AppRouter;