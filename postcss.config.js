export default {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './index.html',
        './src/**/*.{jsx,js,ts,tsx}'
      ],
      // This protects essential Bootstrap classes from being deleted
      safelist: {
        standard: [
          'html', 'body', /^nav-/, /^navbar-/, /^btn-/, /^modal-/, 
          /^dropdown-/, /^show$/, /^active$/, /^fade$/, /^collapse$/
        ],
        deep: [/dropdown-menu$/, /navbar-collapse$/]
      }
    },
    'autoprefixer': {}
  }
}