/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Pontano Sans'],
    },
    colors: {
      'yellow-1': '#8C6D11',
      'yellow-2': '#F2BD1D',
      'yellow-3': '#F2CF1D',
      'yellow-4': '#403208',
      'black': '#0D0D0D',
      'white': '#fff',
      'bg-black': '#030303'
    },
    extend: {},

  },
  plugins: [],
}
