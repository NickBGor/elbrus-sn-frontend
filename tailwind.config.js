module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
      },
      container: {
        center: true,
      },
      colors: {
        mainColor: { DEFAULT: '#4520ab', 100: 'rgba(69, 32, 171, 0.7)' },
        secondColor: { DEFAULT: '#ffbc5b', 100: 'rgba(255, 188, 91, 0.7)' },
        thirdColor: { DEFAULT: '#66eefb', 100: 'rgba(102, 238, 251, 0.7)' },
        bodyColor: { darkMode: '#202020', lightMode: '#ffffff' },
        headerColor: { darkMode: '#1a1a1a', lightMode: '#f4f4f4' },
        sideBar: { darkMode: '#252526', lightMode: '#f9f9f9' },
        darkModeTextColor: 'rgba(255, 255, 255, 0.9)',
      },
      boxShadow: {
        mainColorShadow: '0 10px 60px 0 #4520ab',
        thirdColorShadow: '0 0 20px 0 #66eefb',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      scale: ['group-hover', 'hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
