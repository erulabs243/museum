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
