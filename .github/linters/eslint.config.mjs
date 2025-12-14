import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["**/node_modules/**"],
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.browser
      }
    }
  },
];