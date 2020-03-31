module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': [2, { props: false }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  plugins: ['prettier', 'jest'],
};
