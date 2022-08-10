'use strict';

import { Footer, Navbar } from '../../components/sections';

const About = () => {
    return (
        <main>
            <Navbar />

            {/* ABOUT */}
            <section className="h-96 py-24">
                <div className="flex flex-col w-2/3 mx-auto">
                    <h1 className="font-semibold text-lg text-red-500 uppercase">
                        A propos de nous
                    </h1>
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
            <h1>Mission</h1>

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
