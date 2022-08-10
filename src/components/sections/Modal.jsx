'use strict';

import PropTypes from 'prop-types';
import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/solid';

import { MyAudioPlayer, MyVideoPlayer, TagBadge } from '../atoms';

const Modal = ({ element = {}, type, isShowing, hide }) => {
    return (
        <section
            className={
                isShowing
                    ? 'flex items-center justify-center top-0 w-full h-full fixed bg-gray-700 transition ease-in delay-100 duration-1000'
                    : 'hidden transition ease-out delay-100'
            }>
            <div className="flex flex-col items-center md:flex-row w-full h-full gap-4 p-6 sm:py-8 sm:px-12 text-gray-100">
                <button className="absolute top-5 right-5 text-gray-50" onClick={hide}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6">
                        <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                    </svg>
                </button>

                {/* AUDIO */}
                {type == 'audio' && <MyAudioPlayer audio={element} />}

                {/* IMAGE */}
                {type == 'image' && (
                    <img
                        /* src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib" */
                        src={element.link}
                        className="h-5/6 w-5/6 object-contain rounded-2xl"
                    />
                )}

                {/* VIDEO */}
                {type == 'video' && <MyVideoPlayer video={element} />}

                <div className="flex flex-col items-start justify-start h-5/6 md:max-w-screen-sm p-6 overflow-y-auto">
                    <h2 className="text-3xl font-semibold leading-tight tracking-wide py-3">
                        {element.title}
                    </h2>
                    <div className="flex flex-col py-3">
                        <p className="flex flex-row items-center text-gray-300">
                            <LocationMarkerIcon className="h-5 w-5 mr-2" />
                            Bukavu, Sud-Kivu, Republique Democratique du Congo
                        </p>
                        <p className="flex flex-row items-center text-gray-300">
                            <ClockIcon className="h-5 w-5 mr-2" />
                            {new Date().toLocaleDateString()}
                        </p>
                    </div>
                    <p className="flex text-gray-400 py-3">
                        Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores
                        non itaque aliquam sint.
                    </p>
                    <div className="py-3">
                        <h3 className="text-sm uppercase leading-snug">Description</h3>
                        <p className="flex text-gray-400">{element.description}</p>
                    </div>
                    <div className="py-3">
                        <h5 className="text-sm uppercase leading-snug">Tags</h5>
                        <div className="py-3">
                            <TagBadge name="accueil" path="/" />
                            <TagBadge name="accueil" path="/" />
                            <TagBadge name="accueil" path="/" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Modal.propTypes = {
    element: PropTypes.object,
    type: PropTypes.number,
    isShowing: PropTypes.bool,
    hide: PropTypes.func
};

export default Modal;
