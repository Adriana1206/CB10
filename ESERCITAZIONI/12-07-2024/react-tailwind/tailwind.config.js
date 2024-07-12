/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': 'rgba(11, 26, 45, 1)',
      },
      boxShadow: {
        'custom': 'rgba(20, 37, 61, 0.8) 10px 7px 39px 0px',
      },
    },
  },
  plugins: [],
}

