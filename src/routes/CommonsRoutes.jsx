'use strict';

import { NotFound } from '../pages/commons';

const CommonsRoutes = [
    {
        path: '*',
        element: <NotFound />
    }
];

export default CommonsRoutes;
