module.exports = {
  extends: [
    'eslint-config-airbnb',
    './index'
  ].map(require.resolve),
  plugins: [
    'react-hooks'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': 'error',
    'react/prop-types': [1, { skipUndeclared: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
