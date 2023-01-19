/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0AC05E",

          "secondary": "#313131",

          "accent": "#676A6C",

          "neutral": "#ffffff",

          "base-100": "#FAFAFA",

          "info": "#86D5E9",

          "success": "#165A2F",

          "warning": "#FBB040",

          "error": "#FF4D4A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}