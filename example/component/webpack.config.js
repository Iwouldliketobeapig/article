const path = require('path');
const fs = require('fs');
const root = process.cwd();
const componentDir = 'component';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name.split('.')[0]] = path.join(root, `${componentDir}/${name}`);
  return prev;
}, {});

console.log(cModuleMap);

module.exports = {
  entry: {
    index: './index.js',
    ...cModuleMap,
  },
  output: {
    path: path.join(root, 'dist'),
    filename: '[name].js',
    chunkFilename: 'componet/[name].js',
    library: ['test-components', '[name]'], 
    libraryTarget: 'umd',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', 'jsx'],
  },
  mode: 'development',
  externals: {
    react: {
      Root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      Amd: 'react',
    }
  },
  module: {
    rules: [
      {
        test: /\.(j)sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
}