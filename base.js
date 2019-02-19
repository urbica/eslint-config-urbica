module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-prettier',
    'eslint-config-urbica/defaults'
  ].map(require.resolve),
  rules: {}
};
