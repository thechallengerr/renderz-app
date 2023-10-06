/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        
      },
      keyframes: {
        
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
      gridAutoRows: {
        'program': 'minmax(90px, auto)',
      }
    },
  },
  plugins: [
  ],
  corePlugins: {
    preflight: false,
  }

}