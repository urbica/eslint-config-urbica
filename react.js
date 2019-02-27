module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-prettier', './index'].map(
    require.resolve
  ),
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': 'error',
    'react/prop-types': [1, { skipUndeclared: true }]
  }
};
