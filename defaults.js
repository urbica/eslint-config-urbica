module.exports = {
  rules: {
    'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', { code: 80, ignoreUrls: true }],
    quotes: ['error', 'single']
  }
};
