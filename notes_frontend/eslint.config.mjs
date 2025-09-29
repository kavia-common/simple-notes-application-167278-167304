/* eslint.config.mjs - Flat config */
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Ignore generated/build output
  {
    ignores: ['.astro/**', 'dist/**', '.vercel/**', '.netlify/**', 'node_modules/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // TypeScript
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Relax triple-slash rule; Astro generators use it internally
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // JavaScript
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'eqeqeq': ['error', 'always'],
    },
  },
];
