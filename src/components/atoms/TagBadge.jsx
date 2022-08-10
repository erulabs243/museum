'use strict';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TagBadge = ({ name, path }) => {
    return (
        <Link
            type="button"
            to={path}
            className="px-5 py-2 mx-1 rounded-full bg-gray-50 text-gray-700">
            {name}
        </Link>
    );
};

TagBadge.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default TagBadge;
