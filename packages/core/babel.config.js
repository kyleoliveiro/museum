module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        ['babel-plugin-webpack-alias', { config: './webpack.config.js' }],
      ],
    },
  },
};
