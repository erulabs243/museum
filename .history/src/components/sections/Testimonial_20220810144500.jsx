'use strict';

import { ChatAltIcon } from '@heroicons/react/solid';

const Testimonial = ({ testimonial = {} }) => {
    return (
        <section className="my-8">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                {/* <ChatAltIcon className="h-16 w-16 text-gray-200" /> */}
                <p className="px-6 py-2 text-2xl text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-700">
                    &ldquo;Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum
                    perspiciatis iusto, provident qui nam dolorum corporis.&rdquo;
                </p>
                <div className="flex justify-center space-x-3">
                    <img
                        src="https://source.unsplash.com/80x80/?portrait?1"
                        alt=""
                        className="w-20 h-20 bg-center bg-cover rounded-md bg-gray-700"
                    />
                    <div>
                        <p className="leading-tight">Leroy Jenkins</p>
                        <p className="text-sm leading-tight text-gray-100">Founder, Company</p>
                        <a
                            className="flex items-center py-2 space-x-1 text-sm text-gray-50"
                            href="/">
                            <span>Lire l'histoire</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4">
                                <path
                                    fillRule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
