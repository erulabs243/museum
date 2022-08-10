'use strict';

import { Navbar, Footer } from '../../components/sections';

const Story = () => {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col w-full mx-auto overflow-hidden rounded">
                <img
                    src="https://images.unsplash.com/photo-1626695436755-3e288720849c"
                    alt=""
                    className="w-full h-60 sm:h-96 object-cover object-center"
                />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                    <div className="space-y-2">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="inline-block text-2xl font-semibold sm:text-3xl">
                            The Best Activewear from the Nordstrom Anniversary Sale
                        </a>
                        <p className="text-xs text-gray-400">
                            By
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="text-xs hover:underline">
                                Leroy Jenkins
                            </a>
                        </p>
                    </div>
                    <div className="text-gray-100">
                        <p>Insert the actual text content here...</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Story;
