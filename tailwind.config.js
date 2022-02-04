module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen': '100vw'
      },
      colors: {
        'custom-black':'#141414',
        'black-w-opacity': '#000000D1',
      },
      fontFamily: {
        'sans': ['Archivo', 'Arial', 'sans-serif']
      },
      padding: {        
        '34': '8.5rem',      
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}