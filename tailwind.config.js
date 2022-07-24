module.exports = {
    purge: [
      './public/**/*.html',
    ],
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'regal-blue-100': '#19a2ae',
          'regal-gray-121': '#797983'
        },
        backgroundImage:{
          'hero-bottom':"url(images/bg-pattern-bottom.svg)",
          'hero-top':"url(images/bg-pattern-top.svg)",
          'card-top':"url(images/bg-pattern-card.svg)",
        }
      },
    },
    plugins: [],
}