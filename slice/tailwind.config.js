/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      "backgroundImage": {
        'hero-pattern': "url('./public/assets/bg.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      'fontFamily': {
        "inter": ['poppins']
      }, "colors": {
        "button": "#FCD980",
        "bgbutton": "#FFCA1D",
        "txt-button": "#282938",
        "latar": "#1C1E53"
      }, 'dropShadow': {
        "sm-shadow": [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
          '0px 5px 11px 0px rgba(0, 0, 0, 0.10)',
          '0px 20px 20px 0px rgba(0, 0, 0, 0.09)',
          '0px 45px 27px 0px rgba(0, 0, 0, 0.05)',
          '0px 81px 32px 0px rgba(0, 0, 0, 0.01)',
          '0px 126px 35px 0px rgba(0, 0, 0, 0.00);'
        ]
      }
    },
  },
  plugins: [],
}