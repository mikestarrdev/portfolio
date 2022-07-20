/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
        sm: "480px",
        md: "640px",
        tablet: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        whitney: "url('/src/img/header-whitney.jpg')",
        // gradient: "url('./src/img/stacked-peaks-haikei.svg')",
      },
    },
  },
  plugins: [],
};
