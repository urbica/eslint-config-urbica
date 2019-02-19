module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-prettier'
  ].map(require.resolve),
  rules: {
    'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', { code: 80, ignoreUrls: true }],
    quotes: ['error', 'single']
  }
};
