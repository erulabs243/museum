'use strict';

import { useState } from 'react';

import { Footer, LibraryHeader, Navbar, Image, Modal } from '../../components/sections';
import useModal from '../../config/useModal';

const imgs = [
    {
        link: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    },
    {
        link: 'https://images.unsplash.com/photo-1575540325855-4b5d285a3845',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    },
    {
        link: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    },
    {
        link: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    },
    {
        link: 'https://images.unsplash.com/photo-1611693196679-c1f358840cc6',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    },
    {
        link: 'https://images.unsplash.com/photo-1626695436755-3e288720849c',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    },
    {
        link: 'https://images.unsplash.com/photo-1511185307590-3c29c11275ca',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Iste enim nostrum temporibus! Beatae rem ipsum obcaecati. ' +
            'Optio at deleniti officiis sit fugiat harum! ' +
            'Mollitia, ullam quia maiores soluta unde laudantium.',
        date: new Date()
    }
];

const Gallery = () => {
    const { isShowing, toggle } = useModal();

    const [currentImage, setCurrentImage] = useState({});
    const [images, setImages] = useState(imgs);

    const selectImage = (image) => {
        setCurrentImage(image);
        toggle(true);
    };

    return (
        <main>
            <Navbar />
            <LibraryHeader />

            <section className="py-24 bg-gray-50 text-gray-700">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    {images.map((img, idx) => (
                        <Image key={idx} image={img} selectImage={selectImage} />
                    ))}
                </div>
            </section>

            <Modal element={currentImage} type="image" isShowing={isShowing} hide={toggle} />

            <Footer />
        </main>
    );
};

export default Gallery;
