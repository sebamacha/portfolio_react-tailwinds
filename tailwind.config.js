// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // Corregido aquí para incluirlo en el mismo array
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')
  ]
};