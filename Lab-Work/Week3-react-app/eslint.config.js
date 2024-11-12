import js from '@eslint/js'; // Import ESLint core rules
import globals from 'globals'; // Import global variables
import react from 'eslint-plugin-react'; // Import React plugin
import reactHooks from 'eslint-plugin-react-hooks'; // Import React Hooks plugin
import reactRefresh from 'eslint-plugin-react-refresh'; // Import React Refresh plugin

export default [
  { ignores: ['dist'] }, // Ignore the dist folder
  {
    files: ['**/*.{js,jsx}'], // Apply rules to JS and JSX files
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 features
      globals: globals.browser, // Use browser globals
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX support
        sourceType: 'module', // Use ES module syntax
      },
    },
    settings: { react: { version: '18.3' } }, // Specify React version
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [
      "wesbos", // Extend Wes Bos ESLint rules
      "plugin:react/recommended", // Recommended React rules
      "plugin:react-hooks/recommended", // Recommended React Hooks rules
      "eslint:recommended" // Recommended ESLint rules
    ],
    rules: {
      ...js.configs.recommended.rules, // Recommended ESLint core rules
      ...react.configs.recommended.rules, // Recommended React rules
      ...react.configs['jsx-runtime'].rules, // JSX runtime rules
      ...reactHooks.configs.recommended.rules, // Recommended React Hooks rules
      'react/jsx-no-target-blank': 'off', // Custom rule settings
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Add more custom rules here if needed
      // 'no-console': 'warn', // Example: warn on console.log statements
      // 'indent': ['error', 2], // Example: enforce 2-space indentation
      // 'semi': ['error', 'always'], // Example: enforce semicolons
    },
  },
];
