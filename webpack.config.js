// webpack.config.js

module.exports = {
  // the main entry of our app
  entry: './src/index.js',
  // output configuration
  output: {
    path: __dirname + '/public',
    publicPath: 'public/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // process *.vue files using vue-loader
      { test: /\.vue$/, loader: 'vue' },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}