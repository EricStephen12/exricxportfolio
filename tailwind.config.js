/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8b5cf6', // Electric Purple
                dark: '#1a1a1a',
                darker: '#0d0d0d',
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
