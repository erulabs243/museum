'use strict';

import PropTypes from 'prop-types';

const MediaCard = ({ media, selectMedia }) => {
    return (
        <div
            className="max-w-sm rounded-md shadow-md self-center bg-gray-900 text-gray-100 hover:cursor-pointer"
            onClick={() => selectMedia(media)}>
            <img
                src={media.poster}
                alt={media.title}
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">{media.title}</h2>
                </div>
            </div>
        </div>
    );
};

MediaCard.propTypes = {
    media: PropTypes.object.isRequired,
    selectMedia: PropTypes.func.isRequired
};

export default MediaCard;
