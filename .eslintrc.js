module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "mocha": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": "warn",
    "dot-notation": "error",
    "eqeqeq": ["error", "always"],
    "no-eval": "error",
    "no-path-concat": "error",
    "brace-style": "error",
    "comma-dangle": ["error", "never"],
    "func-style": ["error", "expression"],
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error"
  }
};
