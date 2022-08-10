'use strict';

import PropTypes from 'prop-types';

const Image = ({ image, selectImage }) => {
    return (
        <article>
            <img
                alt=""
                className="w-full h-full rounded object-cover object-center min-h-48 bg-gray-50 aspect-square hover:scale-110 transition ease-in-out hover:cursor-pointer"
                src={image.link}
                onClick={() => selectImage(image)}
            />
        </article>
    );
};

Image.propTypes = {
    image: PropTypes.object.isRequired,
    selectImage: PropTypes.func.isRequired
};

export default Image;
