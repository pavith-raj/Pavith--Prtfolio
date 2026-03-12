/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'smoky-black': 'hsl(0, 0%, 7%)',
                'eerie-black': 'hsl(240, 2%, 12%)',
                'eerie-black-alpha': 'hsla(240, 2%, 12%, 0.7)',
                'jet': 'hsl(240, 1%, 17%)',
                'orange-yellow': 'hsl(45, 100%, 72%)',
                'vegas-gold': 'hsl(45, 54%, 58%)'
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            }
        },
    },
    plugins: [],
}
