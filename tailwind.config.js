/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: "#313030",
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#151515",
      },
    },
    screens: {
      'sm': '980px',
      // => @media (min-width: 640px) { ... }

      'md': '1020px',
      // => @media (min-width: 768px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1919px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
};
