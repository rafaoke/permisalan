/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
        colors: {
          maroon: '#680000',
          lightmaroon : '#800404',
          darkmaroon: '#600404',
      },
        fontFamily: {
          Josefin: ['Josefin Sans', 'sans-serif'],
        }
  } 
},
  plugins: [],
}
