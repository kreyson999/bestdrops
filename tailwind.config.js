module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black':'#141414',
        'black-w-opacity': '#000000D1',
      },
      fontFamily: {
        'oswald': ['"Oswald"', 'Arial', 'sans-serif']
      },
      padding: {        
        '34': '8.5rem',      
      }
    },
  },
  plugins: [],
}