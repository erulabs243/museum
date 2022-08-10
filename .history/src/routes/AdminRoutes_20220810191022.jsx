'use strict';

import { Contact, Dashboard, Post } from '../pages/admin';

const AdminRoutes = [
    {
        path: '/admin',
        element: <Dashboard />
    },
    {
        path: '/post',
        element: <Post />
    },
    {
        path: '/contacts',
        element: <Contact />
    }
];

export default AdminRoutes;
