'use strict';

const Article = () => {
    return (
        <article className="w-1/2">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm my-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Jun 1, 2020</span>
                </div>
                <div className="mt-3">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-2xl font-bold hover:underline">
                        Nos creasse pendere crescit angelos etc
                    </a>
                    <p className="mt-2">
                        Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo
                        volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem
                        naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du
                        huic at in dixi aër.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" href="#" className="hover:underline text-red-500">
                        Read more
                    </a>
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img
                                src="https://source.unsplash.com/50x50/?portrait"
                                alt="avatar"
                                className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                            />
                            <span className="hover:underline text-gray-400">Leroy Jenkins</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;