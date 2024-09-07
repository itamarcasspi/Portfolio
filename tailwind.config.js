/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        grow: "grow 0.9s ease-in-out",
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
