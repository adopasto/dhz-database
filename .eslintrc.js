module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
      'eslint:recommended',
      "plugin:jsx-a11y/strict",
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      "react-app",
      'prettier',
      

    ],
    rules: {
      "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/no-use-before-define": [
      "warn",
      {
        "functions": false,
        "classes": false,
        "variables": false
      }
    ],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    "padding-line-between-statements": [
      "warn",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "class"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "for"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "function"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "if"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "switch"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "try"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "while"
      },
      {
        "blankLine": "always",
        "prev": "block-like",
        "next": ["let", "const"]
      }
    ],
    "prefer-const": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-key": "warn",
    "react/no-array-index-key": "warn",
    "react/prefer-stateless-function": "warn",
    "react/self-closing-comp": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  