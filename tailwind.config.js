module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // animation keyframes
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.7s ease-in',
      },

      // font-family
      fontFamily: {
        expletus: ['Expletus Sans', 'cursive'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
