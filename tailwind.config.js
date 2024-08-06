/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('../public/background_wallpaper.png')",
        'parchment': "url('../public/parchment.png')",
        'upbutton': "url('../public/up_button.png')",
        'navbarcurtain' : "url('../public/NavBarTile.png')"
      },
      fontFamily:{
        sans: ["SortsMillGoudy", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
