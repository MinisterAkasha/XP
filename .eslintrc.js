/* eslint-disable */
const prettierConfig = require('./.prettierrc.js');

module.exports = {
    extends: [
        'airbnb-base',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['import', 'prettier', 'react', '@typescript-eslint'],
    rules: {
        'react/prop-types': 'off',
        'react/static-property-placement': 'off',
        'react/state-in-constructor': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/display-name': 'error',
        'react/jsx-no-leaked-render': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/sort-comp': 'off',
        'react/no-array-index-key': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off', // ?
        'react/jsx-no-useless-fragment': 'off',

        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-tabindex': 'off',

        'default-param-last': 'warn',

        '@typescript-eslint/member-ordering': [
            'warn',
            {
                default: {
                    optionalityOrder: 'required-first',
                },
            },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        'no-restricted-syntax': 'off', // В for...of циклах ничего плохого нет
        'spaced-comment': ['error', 'always', { markers: ['/'] }], /// разрешаем ts-require directive
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'always'],

        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        indent: 'off',
        'max-len': [
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: '*', next: 'if' },
        ],
        'implicit-arrow-linebreak': 'off',
        'no-plusplus': 'off',
        'max-classes-per-file': 'off',
        'operator-linebreak': 'off',
        'object-curly-newline': 'off',
        'class-methods-use-this': 'off',
        'no-confusing-arrow': 'off',
        'function-paren-newline': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'warn',
        'consistent-return': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',

        'import/prefer-default-export': 'off', // @grape: https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['off'],
        'arrow-body-style': 'off',
        'no-unused-expressions': 'off',
        'prettier/prettier': ['error', prettierConfig],
        camelcase: 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }], // TODO убрать .js/jsx после переезда на ts
        '@typescript-eslint/ban-ts-comment': 'error',
        'jsx-a11y/tabindex-no-positive': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'error',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'default', format: ['camelCase'] },
			{ selector: 'import', format: ['camelCase', 'PascalCase'] },
            {
                selector: ['variable'],
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            {
                selector: ['typeLike', 'function'], // class, interface,typeAlias,enum,typeParameter
                format: ['PascalCase', 'camelCase'],
            },
            {
                selector: ['memberLike', 'property'], // classProperty,objectLiteralProperty,typeProperty, parameterProperty,method,accessor,enumMember
                format: ['camelCase', 'snake_case', 'UPPER_CASE', 'PascalCase'],
            },
            {
                selector: ['parameter'], // function parameter
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
        ],
    },
    overrides: [
        {
            files: ['*.tsx?'],
            env: {
                browser: true,
            },
            globals: {
                window: true,
                document: true,
            },
        },
    ],
};
/* eslint-eandle */