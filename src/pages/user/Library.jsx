'use strict';

import { Navbar, Footer, LibraryHeader, Pagination } from '../../components/sections';

const Library = () => {
    return (
        <main>
            <Navbar />

            <LibraryHeader />
            <Pagination />
            <Footer />
        </main>
    );
};

export default Library;
