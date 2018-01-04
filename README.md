# @vanillaforums/babel-preset

> A babel preset for transforming your JavaScript for Vanilla Forums.

Currently contains transforms for all standard syntax that is [stage 4](https://tc39.github.io/ecma262/) (ES2017).

We have also enabled the following additional plugins:
- [Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread)
- [React JSX support](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
- [ES Dynamic Import Syntax (actual import is provided by webpack)](https://babeljs.io/docs/plugins/syntax-dynamic-import/)
- [Class Properties](https://babeljs.io/docs/plugins/transform-class-properties/)

## Install

```sh
$ yarn add --dev @vanillaforums/babel-preset
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@vanillaforums/babel-preset"]
}
```

### Via CLI

```sh
$ babel script.js --presets @vanillaforums/babel-preset
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["@vanillaforums/babel-preset"]
});
```

### Targeting Environments

This module uses babel-preset-env to target specific environments.

For a list of browsers please see [browserlist](https://github.com/ai/browserslist).

Currently targetted environments are:

```js
[
    "ie > 9",
    "last 6 iOS versions",
    "last 4 versions"
]
```
