
module.exports = {
  // prefix: "tw-",
  // prefix: 'hs-',
  content: [
    "./src/**/*.{html,ts}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
  darkMode: 'class',
}

