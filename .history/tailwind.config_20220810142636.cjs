/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: ['./index.html', './src/**/*.{,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                children: "url('../../src/assets/children.jpg')"
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('tailwind-clip-path')]
};
