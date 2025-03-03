/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extraBold": ["Rubik_ExtraBold", "sans-serif"],
        "rubik-light": ["Rubik_Light", "sans-serif"],
        "rubik-medium": ["Rubik_Medium", "sans-serif"],
        "rubik-semiBold": ["Rubik_SemiBold", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#efeaf5",
          100: "#8e6cef",
        },
      },
      gray: "#f4f4f4",
      black: {
        DEFAULT: "#000",
        50: "#858484",
        100: "#272727",
      },
      danger:'#f75555'
    },
  },
  plugins: [],
};
