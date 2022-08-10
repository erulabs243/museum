'use strict';

import { Login, NotFound } from '../pages/commons';

const CommonsRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

export default CommonsRoutes;
