const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, './src')
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'] 
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?hash=sha512&digest=hex&name=[hash].[ext]',
      //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //   ]
      // }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  devtool: 'cheap-module-eval-source-map'
};