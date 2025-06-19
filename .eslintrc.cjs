module.exports = {
  root: true,
  extends: [
    "@nuxt/eslint-config",
    "@unocss/eslint-config",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        arrowParens: "always",
        singleQuote: false,
        endOfLine: "auto",
        singleAttributePerLine: true,
      },
    ],
    "vue/no-setup-props-destructure": "off",
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/v-on-event-hyphenation": ["error", "never", { autofix: true }],
    "vue/valid-v-slot": ["error", { allowModifiers: true }],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
  },
};
