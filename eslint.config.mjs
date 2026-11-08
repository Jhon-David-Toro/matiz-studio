import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsdoc from "eslint-plugin-jsdoc";

import local from "./eslint-rules/effect-calls-function.mjs";

const TEST_FILES = ["**/*.test.{ts,tsx,mjs}", "vitest.setup.ts", "src/test/**"];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Low complexity: small functions, shallow nesting, few parameters (same metric as the VS Code "Code Metrics" extension)
  {
    rules: {
      complexity: ["error", 6],
      "max-depth": ["error", 2],
      "max-params": ["error", 3],
      "max-nested-callbacks": ["error", 3],
      "max-lines-per-function": ["error", { max: 40, skipBlankLines: true, skipComments: true }],
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  // Effects only call a named function
  {
    plugins: { local },
    rules: { "local/effect-calls-function": "error" },
  },
  // JSDoc on every named function and component, with every parameter and the return value
  {
    files: ["src/**/*.{ts,tsx}", "eslint-rules/**/*.mjs"],
    ignores: TEST_FILES,
    ...jsdoc.configs["flat/recommended-typescript-error"],
    files: ["src/**/*.{ts,tsx}", "eslint-rules/**/*.mjs"],
  },
  {
    files: ["src/**/*.{ts,tsx}", "eslint-rules/**/*.mjs"],
    ignores: TEST_FILES,
    plugins: { jsdoc },
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        {
          require: { FunctionDeclaration: true, MethodDefinition: true },
          contexts: ["VariableDeclarator > ArrowFunctionExpression"],
        },
      ],
      "jsdoc/require-description": "error",
      "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
      "jsdoc/require-param-description": "error",
      "jsdoc/require-returns-description": "error",
    },
  },
  {
    files: ["eslint-rules/**/*.mjs"],
    plugins: { jsdoc },
    rules: { "jsdoc/no-types": "off", "jsdoc/require-param-type": "error", "jsdoc/require-returns-type": "error" },
  },
  // Nothing deprecated: needs type information to know what is marked @deprecated
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parserOptions: { projectService: true } },
    rules: { "@typescript-eslint/no-deprecated": "error" },
  },
  // Tests describe behavior in long callbacks
  {
    files: TEST_FILES,
    rules: { "max-lines-per-function": "off", "max-nested-callbacks": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "coverage/**", "next-env.d.ts"]),
]);

export default eslintConfig;
