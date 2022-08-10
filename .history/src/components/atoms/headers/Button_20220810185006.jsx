'use strict';

import { Link } from 'react-router-dom';

const Button = ({ link = {} }) => {
    return (
        <Link
            to={`/${link.path}`}
            className="self-center px-8 py-3 font-semibold rounded bg-red-500 text-gray-900">
            {link.name}
        </Link>
    );
};

export default Button;
