module.exports = {
  bootstrapCustomizations: "./src/assets/styles/_bootswatch.scss",
  mainSass: "./src/assets/styles/styles.scss", // path to your main SASS file (optional)
  verbose: true, // print out your custom files used
  debug: false, // print out the full generated scss file
  styleLoader: "style-loader!css-loader!sass-loader", // see example for the ExtractTextPlugin
  
  scripts: {
  },
  styles: {
    'mixins': true,

    'normalize': true,
    'print': true,
    'glyphicons': true,

    'scaffolding': true,
    'type': true,
    'code': true,
    'grid': true,
    'tables': true,
    'forms': true,
    'buttons': true,

    'component-animations': true,
    'thumbnails': true,

    'utilities': true,
    'responsive-utilities': true
  }
};