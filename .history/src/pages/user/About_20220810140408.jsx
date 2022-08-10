'use strict';

import { UserIcon } from '@heroicons/react/solid';
import { Footer, Navbar } from '../../components/sections';

const About = () => {
    return (
        <main>
            <Navbar />

            {/* ABOUT */}
            <section className="py-24 bg-gray-50">
                <div className="flex flex-col w-2/3 mx-auto">
                    <h1 className="font-semibold text-4xl text-red-500 py-3">A propos de nous</h1>
                    <div className="grid grid-cols-2 py-3">
                        <p className="text-xl">
                            Cillum amet adipisicing ipsum veniam id enim exercitation quis id ut.
                            Veniam velit sunt esse consequat. Et enim nostrud ullamco elit excepteur
                            anim ad qui ullamco. Exercitation deserunt in aliqua nulla esse duis. In
                            aliqua ipsum adipisicing dolor ipsum sit. Ea velit adipisicing irure
                            aute duis est exercitation. Qui non veniam excepteur esse anim aliqua
                            irure ex deserunt enim pariatur elit elit. Velit incididunt est ea
                            cupidatat quis et mollit. Ipsum cupidatat ipsum ullamco Lorem ad nisi
                            deserunt incididunt qui.
                        </p>
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="py-24">
                <div className="grid grid-cols-2">
                    <div className="bg-red-500 text-gray-50 p-24">
                        <h1 className="text-3xl text-center py-3 font-semibold">Mission</h1>
                        <p className="text-xl w-2/3 text-gray-700 mx-auto py-6">
                            Ipsum qui quis incididunt ipsum ex eu fugiat labore ut ipsum do aliqua
                            ex. Est reprehenderit minim sunt dolor et nulla esse magna qui esse. Est
                            qui eu est fugiat nulla velit magna ipsum amet est adipisicing laboris
                            veniam occaecat. Exercitation ut esse eu qui. Ut sit magna officia
                            voluptate mollit. Veniam incididunt sit voluptate sit dolor consequat
                            tempor laborum. In amet esse adipisicing ullamco cupidatat cillum sint
                            in irure irure.
                        </p>
                    </div>
                    <div className="bg-gray-50 text-gray-700 text-5xl">
                        <span>Un text</span>
                    </div>
                </div>
            </section>

            {/* VISION */}
            <h1>Vision</h1>

            {/* VALUES */}
            <h1>Values</h1>

            {/* STORY */}
            <h1>Histoire</h1>
            <Footer />
        </main>
    );
};

export default About;
