/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#EB484C",
        whitegrey: "#FEFEFE",
        lightblack: "#010101",
        grey: "#DFDEDE",
        darkred: "#96151D",
        blur: " #FFFFFF0F",
        offwhite: "#FEFEFE2B",
        offblack: "#000000b3",
      },
      backgroundSize: {
        size: "100% 100%",
      },
      backgroundImage: {
        gamingbtn: "url(/assets/images/svg/bg-btn.svg)",
      },
    },
  },
  plugins: [],
};
