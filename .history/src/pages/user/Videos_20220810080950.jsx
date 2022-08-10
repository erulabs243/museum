'use strict';

import { useState } from 'react';
import { MediaCard } from '../../components/atoms';

import { Footer, LibraryHeader, Navbar, Modal } from '../../components/sections';
import useModal from '../../config/useModal';

const vids = [
    {
        link: 'http://localhost:5173/africa.mp4',
        poster: 'https://images.unsplash.com/photo-1511185307590-3c29c11275ca',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    }
];

const Videos = () => {
    const { isShowing, toggle } = useModal();

    const [currentVideo, setCurrentVideo] = useState({});
    const [videos, setVideos] = useState(vids);

    const selectVideo = (video) => {
        setCurrentVideo(video);
        toggle(true);
    };

    return (
        <main>
            <Navbar />
            <LibraryHeader />

            <section className="py-24 bg-gray-50 text-gray-700">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    {videos.map((vid, idx) => (
                        <MediaCard key={idx} media={vid} selectMedia={selectVideo} />
                    ))}
                </div>
            </section>

            <Modal element={currentVideo} type="video" isShowing={isShowing} hide={toggle} />

            <Footer />
        </main>
    );
};

export default Videos;
