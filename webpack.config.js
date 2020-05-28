var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },    
  entry : './app/index.js',
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js'
  },
  module : {
    rules : [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test : /\.css$/, 
        use:['style-loader', 'css-loader']
      },
      { 
        test: /\.s[ac]ss$/i, 
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.(svg|png|jpg|jpeg|gif)$/,
        use: { 
          loader: 'file-loader', 
          options: {
            name: '[path][name].[ext]',
            outputPath: 'dist/img' //might be wrong
          }
        }
      }
    ]
  },
  mode:'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: './index.html',
    }),
  ],

};