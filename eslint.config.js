import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      'prettier/prettier': ['error'], // Enforces Prettier formatting
      'comma-dangle': [0, 'always-multiline'],
      'object-shorthand': [
        2,
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: false,
        },
      ],
      'max-len': [
        2,
        140,
        {
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreComments: false,
        },
      ],
      'consistent-return': 0,
      'prefer-destructuring': [
        2,
        { array: false, object: false },
        { enforceForRenamedProperties: false },
      ],
      'prefer-object-spread': 0,
      'prefer-rest-params': 0,
      'prefer-spread': 0,
      'function-call-argument-newline': "off",
      'function-paren-newline': 0,
      'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
      'no-param-reassign': 1,
      strict: [2, 'safe'],
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: [
              'decorated-field',
              'public-field',
              'protected-field',
              'private-field',
              'constructor',
              'public-decorated-method',
              'public-static-method',
              'public-method',
              'private-decorated-method',
              'private-static-method',
              'private-method',
              'protected-decorated-method',
              'protected-static-method',
              'protected-method',
            ],
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['enumMember'],
          format: ['UPPER_CASE'],
        },
        {
          selector: ['enum', 'typeLike'],
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          "selector": "interface",
          "format": ["PascalCase", "camelCase"]
        },
        {
          selector: 'variable',
          modifiers: ['const', 'exported'],
          format: ['UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'classProperty',
          modifiers: ['public'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'classMethod',
          modifiers: ['public'],
          format: ['camelCase'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', 
      },
    },
  },
);
