/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#009368",
        'secondary': "#ECA30C"
      },
      width: {
        '28%' : '28%',
        '55%' : '55%',
        '35%' : '35%',
        '85%' : '85%',
      },
    },

    
  },
  plugins: [
      require('flowbite/plugin')
  ]
}

