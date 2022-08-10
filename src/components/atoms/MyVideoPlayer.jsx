'use strict';

import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

// TODO: Customize video player

// TODO: Player not working dynamically

const MyVideoPlayer = ({ video }) => {
    const videoRef = useRef(null);
    const [meta, setMeta] = useState();
    const [loading, setIsLoading] = useState(true);

    const playVid = () => {
        videoRef.current.play();
    };

    const pauseVid = () => {
        videoRef.current.pause();
    };

    useEffect(() => {
        const setV = async () => {
            setMeta(video.link);
            setIsLoading(false);
        };
        setV();
    }, [video.link]);

    return (
        <div>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                    <div className="flex flex-col m-5 ">
                        <h1 className="text-xl text-red-500">{meta}</h1>
                        <div className="relative">
                            <video className="w-screen" ref={videoRef} autoPlay playsInline>
                                <source
                                    className="w-30 h-30"
                                    /* src="http://localhost:5173/africa.mp4" */
                                    src={meta}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div>
                            <div>
                                <div className="relative h-1 bg-gray-200">
                                    <div className="absolute h-full w-1/2 bg-green-500 flex items-center justify-end">
                                        <div className="rounded-full w-3 h-3 bg-white shadow"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs font-medium text-gray-500 py-1">
                                <div>1:50</div>
                                <div className="flex space-x-3 pt-5">
                                    <button className="focus:outline-none">
                                        <svg
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#10b981"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <polygon points="19 20 9 12 19 4 19 20"></polygon>
                                            <line x1="5" y1="19" x2="5" y2="5"></line>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => playVid()}
                                        className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-green-500 focus:outline-none">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#10b981"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => pauseVid()}
                                        className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-green-500 focus:outline-none">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#10b981"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </button>
                                    <button className="focus:outline-none">
                                        <svg
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#10b981"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <polygon points="5 4 15 12 5 20 5 4"></polygon>
                                            <line x1="19" y1="5" x2="19" y2="19"></line>
                                        </svg>
                                    </button>
                                </div>
                                <div>3:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

MyVideoPlayer.propTypes = {
    video: PropTypes.object.isRequired
};

export default MyVideoPlayer;
