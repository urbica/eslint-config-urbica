# Urbica ESLint config

![npm](https://img.shields.io/npm/v/eslint-config-urbica.svg)
![npm](https://img.shields.io/npm/dt/eslint-config-urbica.svg)

Urbica [ESLint](https://eslint.org/) config

## Installation

```shell
npm i -D eslint eslint-config-urbica
```

```shell
yarn add -D eslint eslint-config-urbica
```

## Usage

Create `.eslintrc` file, or put this under `eslintConfig` in your `package.json`.

Using `base` config

```js
{
  "extends": "urbica"
}
```

Using `react` config

```js
{
  "extends": "urbica/react"
}
```

### Absolute Imports

If you are using absolute imports, you should install `eslint-import-resolver-node` and specify root path for `import/resolver`:

```js
{
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "./src"
        ]
      }
    }
  }
}
```
