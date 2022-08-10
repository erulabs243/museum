'use strict';

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
                        <p className="text-lg">
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
                    <div className="bg-red-500 text-gray-50 py-24">
                        <h1 className="text-3xl">Mission</h1>
                    </div>
                    <div className="bg-gray-50 text-gray-700">
                        <h1>Values</h1>
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
