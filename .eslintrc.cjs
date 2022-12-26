module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      files: ["./src/**/*.ts", "./src/**/*.tsx"],
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/triple-slash-reference": 0,
    "@typescript-eslint/consistent-type-assertions": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
