/** @type {import('postcss-load-config').Config} */ 
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-remove-rules": {
      rulesToRemove: {
        "img,\nvideo": "height",
      },
    },
  },
}