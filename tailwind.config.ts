/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#171717',
        'secondary': '#444444',
        'accent': '#AD49E1',
        'gray-100': '#EDEDED',
        'gray-200': '#bee9e8',
      },
    },
  },
  plugins: [],
}
