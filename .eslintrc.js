module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    "no-unused-vars": 1,
    "no-inline-style": 0,
    "prettier/prettier": ["error", { singleQuote: false }],
    quotes: "off",
    "comma-dangle": ["error", "never"],
    "react-hooks/exhaustive-deps": "off",
  },
};
