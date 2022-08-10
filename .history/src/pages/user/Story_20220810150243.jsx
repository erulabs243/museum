'use strict';

import { Navbar, Footer } from '../../components/sections';

const Story = () => {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-center w-full mx-auto overflow-hidden rounded">
                <img
                    src="https://images.unsplash.com/photo-1626695436755-3e288720849c"
                    alt=""
                    className="w-full h-96 object-cover object-center"
                />
                <div className="p-24 pb-12 m-4 mx-auto -mt-24 space-y-6 w-full lg:w-1/2 sm:px-24 sm:mx-12 lg:rounded-md bg-gray-50">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <p className="text-sm font-semibold tracking-wider uppercase text-red-400">
                            Temoignage
                        </p>
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl text-red-500">
                            Interdum et malesuada fames ac ante ipsum primis in faucibus?
                        </h1>
                        <p className="text-sm text-gray-600">
                            by
                            <span className="mx-1 underline text-gray-700 font-semibold">
                                <span itemProp="name">Leroy Jenkins</span>
                            </span>
                            on
                            <time dateTime="2021-02-12 15:34:18-0200" className="mx-1">
                                Feb 12th 2021
                            </time>
                        </p>
                    </div>
                    <div className="text-gray-700 tracking-tight text-xl leading-10">
                        <p>
                            Do minim voluptate veniam sint. Aliquip duis officia reprehenderit do
                            commodo officia nulla exercitation labore voluptate laboris Lorem. Irure
                            et sunt quis cupidatat pariatur cupidatat dolor non voluptate
                            consectetur consectetur. Consectetur quis irure aliquip in deserunt sint
                            tempor. Ex duis do pariatur duis amet sunt elit qui cupidatat in culpa
                            irure. Non fugiat id amet deserunt esse. Ipsum ex laboris velit officia
                            ut labore. Laborum commodo nisi eiusmod commodo dolor eu ipsum. Tempor
                            labore consectetur excepteur est et reprehenderit. Labore irure
                            incididunt adipisicing occaecat proident aute Lorem fugiat Lorem nulla.
                            Nisi voluptate sunt nisi est est cupidatat nisi Lorem sit quis
                            incididunt deserunt proident. Quis minim in quis exercitation. <br /> Ex
                            ex nostrud anim cupidatat anim. Ea non pariatur mollit id consequat
                            nulla irure. Mollit sunt magna elit ipsum culpa minim laborum dolor
                            tempor dolore magna veniam consectetur. Consectetur proident ullamco
                            fugiat incididunt. Veniam dolore irure ipsum Lorem tempor qui dolor
                            exercitation qui exercitation non excepteur. Exercitation in aute elit
                            dolore ex ipsum consectetur occaecat magna. <br /> Duis eu proident
                            tempor aliquip fugiat. Quis tempor cillum do do cupidatat veniam anim.
                            Magna ex occaecat ullamco minim pariatur id adipisicing ipsum ad
                            proident consequat elit ullamco. Amet fugiat consectetur aute eu cillum
                            officia in qui. Non pariatur amet dolor aliquip. Dolore excepteur labore
                            dolor voluptate eiusmod. Eu commodo do magna Lorem amet eu deserunt
                            nulla. Et ut aliqua et proident eu non et ut minim ut eiusmod veniam ad.
                            Magna consequat consectetur ullamco nulla exercitation pariatur do ad
                            velit et Lorem velit dolore.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Story;
