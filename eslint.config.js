'use strict'

module.exports = [
  ...require('neostandard')({
    files: ['**/*.{js,cjs,mjs}'],
    ignores: [
      'test/fixtures/circular-a.js',
      'test/fixtures/circular-b.js',
      'test/fixtures/duplicate.mjs',
      'test/fixtures/duplicate-explicit.mjs',
      'test/fixtures/export-types/default-call-expression-renamed.mjs',
      'test/fixtures/json.mjs',
      'test/fixtures/reexport.js',
    ],
  }),
  ...[{
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'script',
        babelOptions: {
          plugins: [
            '@babel/plugin-syntax-import-assertions'
          ],
        },
      },
    }
  },
  {
    rules: {
      'import-x/first': 'off'
    }
  }],
]
