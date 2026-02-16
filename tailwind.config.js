/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
  gridTemplateColumns: {
    15: 'repeat(15, minmax(0, 1fr))',
  },
},

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};


