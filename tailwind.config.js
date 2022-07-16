/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        tablet: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        whitney: "url('/src/img/header-whitney.jpg')",
      },
    },
  },
  plugins: [],
};
