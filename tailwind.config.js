/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        design: ['Archivo' , 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

