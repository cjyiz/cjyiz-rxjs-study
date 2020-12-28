module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        gray: 'gray',
        blue: 'blue',
        red: 'red',
        pink: 'pink',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
