'use strict';

import { Article, Footer, LibraryHeader, Navbar, Pagination } from '../../components/sections';

const Testimonials = () => {
    return (
        <main>
            <Navbar />
            <LibraryHeader />

            {/* ARTICLES */}
            <section className="py-24 px-6 md:p-24 bg-gray-50 flex flex-col items-center">
                {[...Array(10)].map((elt, idx) => (
                    <Article key={idx} />
                ))}
            </section>

            <Pagination />
            <Footer />
        </main>
    );
};

export default Testimonials;
