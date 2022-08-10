'use strict';

import { FilmIcon, NewspaperIcon, PhotographIcon, SpeakerphoneIcon } from '@heroicons/react/solid';

const setActiveMenu = (menu) => {
    let url = window.location.href;
    url = url.substring(url.lastIndexOf('/') + 1);
    return url.includes(menu);
};

const LibraryHeader = ({ header = {} }) => {
    return (
        <section className="bg-children bg-no-repeat bg-cover bg-center bg-fixed text-gray-700 py-24">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24">
                <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        Ac mattis
                        <span className="text-red-500">senectus</span>erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-900">
                        Decouvrez des temoignages sur les survivantes des violences sexuelles faites
                        aux femmes a l'Est de la Republique Democratique du Congo
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="/stories"
                            className={
                                setActiveMenu('stories')
                                    ? 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-red-500 text-gray-50'
                                    : 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-gray-50 text-gray-700 hover:bg-red-500 hover:text-gray-50 transition ease-in-out'
                            }>
                            <NewspaperIcon className="h-5 w-7" />
                            Temoignages
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="podcast"
                            className={
                                setActiveMenu('podcast')
                                    ? 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-red-500 text-gray-50'
                                    : 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-gray-50 text-gray-700 hover:bg-red-500 hover:text-gray-50 transition ease-in-out'
                            }>
                            <SpeakerphoneIcon className="h-5 w-7" />
                            Podcasts
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="/gallery"
                            className={
                                setActiveMenu('gallery')
                                    ? 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-red-500 text-gray-50'
                                    : 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-gray-50 text-gray-700 hover:bg-red-500 hover:text-gray-50 transition ease-in-out'
                            }>
                            <PhotographIcon className="h-5 w-7" />
                            Images
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="/videos"
                            className={
                                setActiveMenu('videos')
                                    ? 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-red-500 text-gray-50'
                                    : 'px-8 py-3 text-lg flex flex-row items-center font-semibold rounded bg-gray-50 text-gray-700 hover:bg-red-500 hover:text-gray-50 transition ease-in-out'
                            }>
                            <FilmIcon className="h-5 w-7" />
                            Videos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LibraryHeader;
