
module.exports = {
  mode:'development',
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  },
};
