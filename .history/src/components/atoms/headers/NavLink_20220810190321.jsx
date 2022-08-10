'use strict';

import { Link } from 'react-router-dom';

const NavLink = ({ link = {} }) => {
    return (
        <Link
            rel="noopener noreferrer"
            to={`/${link.path}`}
            className={
                link.active
                    ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent dark:text-red-500 dark:border-red-500'
                    : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'
            }>
            {link.name}
        </Link>
    );
};

export default NavLink;
