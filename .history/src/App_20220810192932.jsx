'use strict';

import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminRoutes, CommonsRoutes, UserRoutes, AuthRoutes } from './routes';

const AuthContext = createContext(null);

const App = () => {
    const [token, setToken] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                {AuthRoutes.map((route) => (
                    <Route path={route.path} key={route.path} element={route.element} />
                ))}
                {UserRoutes.map((route) => (
                    <Route path={route.path} key={route.path} element={route.element} />
                ))}
                {AdminRoutes.map((route) => (
                    <Route path={route.path} key={route.path} element={route.element} />
                ))}
                {CommonsRoutes.map((route) => (
                    <Route path={route.path} key={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
