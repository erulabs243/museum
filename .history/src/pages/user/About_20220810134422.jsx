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
                    <div className="grid grid-cols-2">
                        <p>
                            Ullamco nostrud labore dolore est ex dolore ut excepteur velit sunt
                            ipsum. Ipsum irure consequat sit sint dolor eiusmod laborum excepteur
                            fugiat quis ex irure sit cupidatat. Enim elit ullamco pariatur sunt et
                            ad ex veniam cupidatat exercitation est fugiat. Mollit labore enim
                            mollit nostrud dolor elit aute cupidatat aliqua. Lorem esse
                            reprehenderit reprehenderit cupidatat quis sunt ut irure. Dolore amet
                            sint enim in. Lorem ad ea quis nostrud consequat elit sunt quis Lorem
                            cillum quis consectetur incididunt. Enim officia et elit id eu irure et
                            ullamco veniam ad anim in. Commodo quis ipsum amet laboris ex Lorem
                            cupidatat do officia proident est. Velit magna incididunt cupidatat nisi
                            dolore sit nisi veniam fugiat ipsum. Excepteur elit ex dolore minim
                            adipisicing laboris pariatur ad proident proident sit pariatur laborum
                            tempor. Ad aliqua sunt adipisicing fugiat aute. Esse nisi ex consectetur
                            consectetur do irure deserunt eiusmod velit sint qui elit commodo irure.
                            Amet veniam minim enim sit et duis laboris esse eiusmod esse incididunt
                            culpa sint. Velit elit nulla aliquip dolore ad aute duis ut pariatur est
                            est magna non.
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
