/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
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
    require('flowbite/plugin')
  ],
  corePlugins: {
    preflight: false,
  }

}