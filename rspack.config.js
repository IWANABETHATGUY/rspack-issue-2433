const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

/**
 *
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: ["./src/index.ts",  "./polyfill.js"],
  }, 
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mjs',
      '.json'
    ],
  },
  target: ['web', 'es5'],
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
    react: {
      // runtime: "automatic",
      refresh: true,
    },
    presetEnv: {
      targets: [
        '> 0.01%',
        'not dead',
        'not op_mini all'
      ],
      mode: 'entry',
      coreJs: '3.26'
    }
  },
  plugins: [],
  devServer: {
    devMiddleware: {
      outputFileSystem: require("fs"),
    }
  },
  module: {
    rules: [
      { test: /\.s[ac]ss$/, use: ["sass-loader"], type: "css" },
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.png$/,
        type: "asset",
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              // ...
            },
          },
        ],
        type: 'css',
      },
    ],
  },
};
