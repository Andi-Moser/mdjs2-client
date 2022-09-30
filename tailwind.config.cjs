/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00ff00'
        }
      }
    },
  },
  daisyui: {
    themes: [
        "dark",
      {
        mytheme: {

          "primary": "#7816ce",

          "secondary": "#53e8e8",

          "accent": "#d2c9ff",

          "neutral": "#24303D",

          "base-100": "#34393D",

          "info": "#50A6F1",

          "success": "#40E7D4",

          "warning": "#F4AE4E",

          "error": "#E03D24",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
