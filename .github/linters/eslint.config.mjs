import globals from "globals";
import json from "@eslint/json";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
      plugins: {
          json,
      },
  },
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
  // lint JSON files
  {
      files: ["**/*.json"],
      language: "json/jsonc",
      rules: {
          "json/no-duplicate-keys": "error",
      },
  },
];