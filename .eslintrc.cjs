module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "react-app"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "space-before-function-paren": ["error", "never"],
  },
};
