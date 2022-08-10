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
                    <p>Insert the actual text content here...</p>
                </div>
            </article>

            <Footer />
        </main>
    );
};

export default Story;
