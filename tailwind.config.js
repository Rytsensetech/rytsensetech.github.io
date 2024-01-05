/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        '3xl': '2000px',
        '2xl': '1670px',
        'xl': '1470px',
      },
      colors:{
        white:"white",
        none:"none"
      },
      borderWidth:{
        1:"1px"
      },
      fontFamily:{
        quicksand:["Quicksand","sans-serif"]
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      
    },
  },
  plugins: [],
}
