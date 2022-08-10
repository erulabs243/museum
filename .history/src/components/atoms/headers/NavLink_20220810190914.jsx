'use strict';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ link = {} }) => {
    return (
        <Link
            rel="noopener noreferrer"
            to={`/${link.path}`}
            className={
                link.active
                    ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-red-500 border-red-500'
                    : 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-red-500'
            }>
            {link.name}
        </Link>
    );
};

NavLink.propTypes = {
    link: PropTypes.object.isRequired
};

export default NavLink;
