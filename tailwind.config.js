 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        'light-coffee': '#6F4E37'
      },
      keyframes: {
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-out',
      },
    },
  },
  plugins: [],
}