let path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './public/js/index.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    host: '127.0.0.1',
    port: 55591,
    watchOptions: {
      watch: true
    },
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/, // node_modulesフォルダ配下でなければ
        loader: 'babel-loader', // babel-loaderを使って変換する
        query: {
          plugins: ['transform-react-jsx'] // babelのtransform-react-jsxプラグインを使ってjsxを変換
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
