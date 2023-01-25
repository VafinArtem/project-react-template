const getCSSModuleLocalIdent = require('./getLocalIdent');
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  sassModules: {
    test: sassRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          esModule: true,
          sourceMap: true,
          importLoaders: 1,
          modules: {
            namedExport: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            getLocalIdent: getCSSModuleLocalIdent,
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                'autoprefixer',
              ],
            ],
          },
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
    include: sassModuleRegex,
  },
  sassDefault: {
    test: sassRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                'autoprefixer',
              ],
            ],
          },
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
    exclude: sassModuleRegex,
  },
  cssModules: {
    test: cssRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          esModule: true,
          sourceMap: true,
          importLoaders: 1,
          modules: {
            namedExport: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            getLocalIdent:getCSSModuleLocalIdent,
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                'autoprefixer',
              ],
            ],
          },
        },
      },
    ],
    include: cssModuleRegex,
  },
  cssDefault: {
    test: cssRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                'autoprefixer',
              ],
            ],
          },
        },
      },
    ],
    exclude: cssModuleRegex,
  },
};
