'use strict';

import { FastForwardIcon, PauseIcon, PlayIcon, RewindIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// TODO: Customize the audio player

// TODO: Set audio player progress

const MyAudioPlayer = ({ audio }) => {
    const [podcast, setPodcast] = useState();
    const [meta, setMeta] = useState();
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        const setP = async () => {
            const p = new Audio(audio.link);
            setPodcast(p);
            setMeta(audio);
            setIsLoading(false);
        };
        setP();
    }, [audio.link]);

    return (
        <div>
            {loading ? (
                <h1>Is loading</h1>
            ) : (
                <div className="full w-xl">
                    <div className="flex items-center justify-center h-screen bg-red-lightest">
                        <div className="shadow-lg rounded-lg w-full">
                            <div className="flex flex-col">
                                <div>
                                    <img
                                        className="w-full rounded hidden md:block"
                                        src="https://tailwindcss.com/img/card-top.jpg"
                                        alt="Album Pic"
                                    />
                                </div>
                                <div className="w-full p-8">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="text-2xl text-grey-darkest font-medium">
                                                {meta.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-8">
                                        <div className="text-gray-50">
                                            <svg
                                                className="w-8 h-8"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                                            </svg>
                                        </div>
                                        <div className="text-gray-50">
                                            <RewindIcon className="h-7 w-7" />
                                        </div>
                                        <button
                                            className="text-white p-3 rounded-full bg-red-500 shadow-lg"
                                            onClick={() => podcast.play()}>
                                            <PlayIcon className="h-12 w-12" />
                                        </button>
                                        <button
                                            className="text-white p-3 rounded-full bg-red-500 shadow-lg"
                                            onClick={() => podcast.pause()}>
                                            <PauseIcon className="h-12 w-12" />
                                        </button>
                                        <div className="text-gray-50">
                                            <FastForwardIcon className="h-7 w-7" />
                                        </div>
                                        <div className="text-gray-50">
                                            <svg
                                                className="w-8 h-8"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-8 py-4">
                                <div className="flex justify-between text-sm text-gray-50">
                                    <p>0:40</p>
                                    <p>4:20</p>
                                </div>
                                <div className="mt-1">
                                    <div className="h-1 bg-grey-dark rounded-full">
                                        <div className="w-1/5 h-1 bg-red-light rounded-full relative">
                                            <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

MyAudioPlayer.propTypes = {
    audio: PropTypes.object.isRequired
};

export default MyAudioPlayer;
