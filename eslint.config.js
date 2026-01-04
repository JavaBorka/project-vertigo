// ESLint 9+ flat config
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

// React recommended (flat if available, otherwise legacy)
const reactRecommended =
  (reactPlugin.configs &&
    reactPlugin.configs.flat &&
    reactPlugin.configs.flat.recommended) ||
  reactPlugin.configs.recommended;

export default [
  {
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: false,
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...(reactRecommended?.rules ?? {}),
      // TS already knows about global types like HTMLElement; avoid false positives
      'no-undef': 'off',
      // Defer formatting indentation to your formatter (Prettier/VSCode)
      indent: 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'only-multiline'],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...(reactRecommended?.rules ?? {}),
      // Defer formatting indentation to your formatter (Prettier/VSCode)
      indent: 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'only-multiline'],
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'src/types/**/*.d.ts'],
  },
];
