/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        primary: "0 2px 30px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
