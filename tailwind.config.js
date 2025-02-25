/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: {
        gemunu:  ['Gemunu Libre', 'serif'],
        open: ['Open Sans', 'serif'],
      },
      fontSize: {
        'xxs': '0.45rem',
        '12xl': '12rem',
      },
      colors: {
        'custom-red': '#BC1A45',
        'custom-melon': '#FFD369',
        'custom-grey': '#DDDDDD',
        'custom-white': '#F7F7F7',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
      }
    },
  },
  plugins: [],
}

