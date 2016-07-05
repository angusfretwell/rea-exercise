import path from 'path';
import autoprefixer from 'autoprefixer';

export default {
  context: path.join(__dirname, '/src'),

  entry: {
    jsx: './index.jsx',
    html: './index.html',
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
      }, {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },

  postcss: [
    autoprefixer,
  ],
};
