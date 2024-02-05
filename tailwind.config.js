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
      text:'#030B1B',
      white:'#f5f5f5',
      violet: {
        '500': '#ffcaa6',
      },
      purple: {
        '500': '#f86594',
      },
    },
    extend: {
      gradientColorStops: {
        'slate-900': '#333333',
        'slate-700': '#555555',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

