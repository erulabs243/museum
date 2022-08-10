'use strict';

const Pagination = () => {
    return (
        <div className="flex justify-center space-x-1 text-gray-100 py-12">
            <button
                title="previous"
                type="button"
                className="inline-flex items-center justify-center w-12 h-12 py-0 border rounded-md shadow-md bg-gray-50 border-gray-700 hover:border-red-500">
                <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 text-gray-700 hover:text-red-500">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button
                type="button"
                title="Page 1"
                className="inline-flex items-center justify-center w-12 h-12 text-xl font-semibold border rounded shadow-md bg-red-500 text-gray-50 border-red-500">
                1
            </button>
            <button
                type="button"
                className="inline-flex items-center justify-center w-12 h-12 text-xl border rounded shadow-md bg-gray-50 border-gray-700 hover:border-red-500 hover:text-red-500 text-gray-700"
                title="Page 2">
                2
            </button>
            <button
                type="button"
                className="inline-flex items-center justify-center w-12 h-12 text-xl border rounded shadow-md bg-gray-50 border-gray-700 hover:border-red-500 hover:text-red-500 text-gray-700"
                title="Page 3">
                3
            </button>
            <button
                type="button"
                className="inline-flex items-center justify-center w-12 h-12 text-xl border rounded shadow-md bg-gray-50 border-gray-700 hover:border-red-500 hover:text-red-500 text-gray-700"
                title="Page 4">
                4
            </button>
            <button
                title="next"
                type="button"
                className="inline-flex items-center justify-center w-12 h-12 py-0 border rounded-md shadow-md bg-gray-50 border-gray-700 hover:border-red-500">
                <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 text-gray-700 hover:text-red-500">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
