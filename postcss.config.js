/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    'postcss-preset-env': {},
  },
};
