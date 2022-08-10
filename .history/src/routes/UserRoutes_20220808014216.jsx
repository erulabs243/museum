'use strict';

import {
    Blog,
    Contact,
    Gallery,
    Home,
    Library,
    Podcast,
    Testimonials,
    Videos
} from '../pages/user';

const UserRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/library',
        element: <Library />
    },
    {
        path: '/stories',
        element: <Testimonials />
    },
    {
        path: '/gallery',
        element: <Gallery />
    },
    {
        path: '/videos',
        element: <Videos />
    },
    {
        path: '/podcast',
        element: <Podcast />
    },
    {
        path: '/blog',
        element: <Blog />
    }
];

export default UserRoutes;
