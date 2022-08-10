'use strict';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminRoutes, CommonsRoutes, UserRoutes, AuthRoutes } from './routes';

const App = () => {
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
