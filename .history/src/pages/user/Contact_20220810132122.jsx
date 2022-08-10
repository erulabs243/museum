'use strict';

import { Footer, Navbar } from '../../components/sections';

const Contact = () => {
    return (
        <main>
            <Navbar />
            <section className="py-6 bg-gray-50 text-gray-700 h-5/6">
                <div className="flex flex-col items-center px-6 mx-auto lg:px-8">
                    <div className="p-12 w-2/3">
                        <h1 className="text-4xl font-bold text-center">Get in touch</h1>
                        <p className="pt-2 pb-4 text-center">
                            Fill in the form to start a conversation
                        </p>
                        <div className="flex justify-center items-center">
                            <p className="flex flex-col justify-center items-center mx-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-7 h-7 my-2">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="text-lg font-semibold">
                                    Fake address, 9999 City
                                </span>
                            </p>
                            <p className="flex  flex-col justify-center items-center mx-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-7 h-7 my-2">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span className="text-lg font-semibold">123456789</span>
                            </p>
                            <p className="flex flex-col justify-center items-center mx-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-7 h-7 my-2">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className="text-lg font-semibold">contact@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form
                        noValidate=""
                        className="flex flex-col w-2/5 py-12 space-y-6 px-12 ng-untouched ng-pristine ng-valid bg-gray-700">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input
                                type="text"
                                placeholder="Leroy Jenkins"
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                            />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input
                                type="email"
                                placeholder="leroy@jenkins.com"
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                            />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea
                                rows="3"
                                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"></textarea>
                        </label>
                        <button
                            type="button"
                            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Contact;
