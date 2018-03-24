module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jest/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react", "jest"],
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
