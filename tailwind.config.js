/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'sm': '650px',
        'ssm': '500px',
        'md': '1500px'

      }
    },
  },
  plugins: [],
}

