/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
        highlight: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        design: ['Archivo' , 'sans-serif'],
        heading: ['Lexend Deca' , 'sans-serif']
    },
    colors:{
      background : '#EDF3FD',
      primary : '#D21F3C' ,
      secondary : '#E873F9',
      accent : '#F854CE',
      text:'#030B1B'
    },
    extend: {},
  },
  plugins: [],
}

