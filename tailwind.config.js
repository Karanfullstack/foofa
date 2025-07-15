/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "black-fade":
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 0%)",
            },
            fontFamily: {
                hubot: ['"Hubot Sans"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
