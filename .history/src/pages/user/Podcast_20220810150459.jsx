'use strict';

import { useState } from 'react';
import { MediaCard } from '../../components/atoms';

import { Footer, LibraryHeader, Navbar, Modal } from '../../components/sections';
import useModal from '../../config/useModal';

const auds = [
    {
        link: 'http://localhost:5173/africa.mp3',
        poster: 'https://images.unsplash.com/photo-1626695436755-3e288720849c',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    },
    {
        link: 'http://localhost:5173/sante.mp3',
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

const Podcast = () => {
    const { isShowing, toggle } = useModal();

    const [currentPodcast, setCurrentPodcast] = useState({});
    const [podcasts, setPodcasts] = useState(auds);

    const selectAudio = (audio) => {
        setCurrentPodcast(audio);
        toggle(true);
    };

    return (
        <main>
            <Navbar />
            <LibraryHeader />

            <section className="py-24 bg-gray-50 text-gray-700">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    {podcasts.map((podcast, idx) => (
                        <MediaCard key={idx} media={podcast} selectMedia={selectAudio} />
                    ))}
                </div>
            </section>

            <Modal element={currentPodcast} type="audio" isShowing={isShowing} hide={toggle} />

            <Footer />
        </main>
    );
};

export default Podcast;
