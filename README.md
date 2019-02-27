# eslint-config-urbica

Urbica [ESLint](https://eslint.org/) config

## Installation

```shell
npm i -D eslint eslint-config-urbica
```

```shell
yarn add -D eslint eslint-config-urbica
```

## Usage

Create `.eslintrc` file

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

If you are using absolute imports, you should specify root path for `import/resolver`:

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
