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
    screens: {
      'xs': '500px',
      // => @media (min-width: 576px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    preflight: false,
  }

}