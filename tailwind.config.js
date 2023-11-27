module.exports = {
    module: require('webpack'),
    require: require('requirejs'),
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js" // Corregido aquí para incluirlo en el mismo array
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
      extend: {
        colors: {
          'regal-blue': '#243c5a',
        },
      }
    },
    plugins: [
      require('flowbite/plugin')
    ]
  };
  