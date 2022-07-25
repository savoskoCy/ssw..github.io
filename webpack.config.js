const path = require('path');
console.log(__dirname)
module.exports = {
  entry: [
    __dirname + '/app/scss/app.scss'
  ],
  output: {
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: './app', name: 'app.css'}
          },
          'sass-loader'
        ]
      }
    ]
  },
  watch: true
};
