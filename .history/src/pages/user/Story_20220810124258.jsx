'use strict';

import { Navbar, Footer } from '../../components/sections';

const Story = () => {
    return (
        <main>
            <Navbar />

            <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-gray-50 text-gray-700">
                <div className="w-full mx-auto space-y-4 text-center">
                    <p className="text-xs font-semibold tracking-wider uppercase">Temoignage</p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
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
                <div className="text-gray-700">
                    <p>
                        Do minim voluptate veniam sint. Aliquip duis officia reprehenderit do
                        commodo officia nulla exercitation labore voluptate laboris Lorem. Irure et
                        sunt quis cupidatat pariatur cupidatat dolor non voluptate consectetur
                        consectetur. Consectetur quis irure aliquip in deserunt sint tempor. Ex duis
                        do pariatur duis amet sunt elit qui cupidatat in culpa irure. Non fugiat id
                        amet deserunt esse. Ipsum ex laboris velit officia ut labore. Laborum
                        commodo nisi eiusmod commodo dolor eu ipsum. Tempor labore consectetur
                        excepteur est et reprehenderit. Labore irure incididunt adipisicing occaecat
                        proident aute Lorem fugiat Lorem nulla. Nisi voluptate sunt nisi est est
                        cupidatat nisi Lorem sit quis incididunt deserunt proident. Quis minim in
                        quis exercitation. Ex ex nostrud anim cupidatat anim. Ea non pariatur mollit
                        id consequat nulla irure. Mollit sunt magna elit ipsum culpa minim laborum
                        dolor tempor dolore magna veniam consectetur. Consectetur proident ullamco
                        fugiat incididunt. Veniam dolore irure ipsum Lorem tempor qui dolor
                        exercitation qui exercitation non excepteur. Exercitation in aute elit
                        dolore ex ipsum consectetur occaecat magna. Duis eu proident tempor aliquip
                        fugiat. Quis tempor cillum do do cupidatat veniam anim. Magna ex occaecat
                        ullamco minim pariatur id adipisicing ipsum ad proident consequat elit
                        ullamco. Amet fugiat consectetur aute eu cillum officia in qui. Non pariatur
                        amet dolor aliquip. Dolore excepteur labore dolor voluptate eiusmod. Eu
                        commodo do magna Lorem amet eu deserunt nulla. Et ut aliqua et proident eu
                        non et ut minim ut eiusmod veniam ad. Magna consequat consectetur ullamco
                        nulla exercitation pariatur do ad velit et Lorem velit dolore.
                    </p>
                </div>
            </article>

            <Footer />
        </main>
    );
};

export default Story;
