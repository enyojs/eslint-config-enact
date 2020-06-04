module.exports = {
	extends: './index.js',
	plugins: ['react', 'babel', 'enact'],
	rules: {
		'array-bracket-spacing': ['warn', 'never', {}],
		'arrow-spacing': ['warn', {
			before: true,
			after: true
		}],
		'brace-style': ['warn', '1tbs', {}],
		'camelcase': ['warn', {
			allow: [
				'^UNSAFE_'
			]
		}],
		'comma-dangle': ['warn', 'never'],
		'comma-spacing': ['warn', {
			after: true
		}],
		'comma-style': 'warn',
		'computed-property-spacing': ['warn', 'never'],
		'dot-location': ['warn', 'property'],
		'eol-last': 'warn',
		'indent': ['warn', 'tab', {
			SwitchCase: 1,
			FunctionDeclaration: {
				body: 1,
				parameters: 2
			},
			FunctionExpression: {
				body: 1,
				parameters: 2
			},
			ignoredNodes: [
				'TemplateLiteral *'
			]
		}],
		'jsx-quotes': ['warn', 'prefer-double'],
		'keyword-spacing': 'warn',
		'linebreak-style': ['warn', 'unix'],
		'max-nested-callbacks': ['warn', 4],
		'no-array-constructor': 'error',
		'no-cond-assign': ['error', 'except-parens'],
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-extend-native': 'error',
		'no-extra-semi': 'warn',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-lonely-if': 'warn',
		'no-mixed-spaces-and-tabs': ['warn', false],
		'no-nested-ternary': 'warn',
		'no-new': 'warn',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-return-assign': ['error', 'except-parens'],
		'no-sequences': 'error',
		'no-shadow': ['error', {
			builtinGlobals: true,
			hoist: 'all',
			allow: [
				'context'
			]
		}],
		'no-undefined': 'error',
		'no-use-before-define': ['error', {
			functions: false
		}],
		'no-useless-call': 'error',
		'no-useless-escape': 'warn',
		'no-useless-return': 'warn',
		'operator-linebreak': ['warn', 'after'],
		'prefer-spread': 'warn',
		'quotes': ['warn', 'single', 'avoid-escape'],
		'radix': ['warn', 'as-needed'],
		'semi': ['warn', 'always'],
		'semi-spacing': ['warn', {
			before: false,
			after: true
		}],
		'space-before-blocks': ['warn', 'always'],
		'space-before-function-paren': ['warn', 'always'],
		'space-infix-ops': ['warn', {
			int32Hint: true
		}],
		'space-unary-ops': ['warn', {
			words: true,
			nonwords: false
		}],
		'spaced-comment': ['warn', 'always', {
			markers: [
				'*'
			]
		}],
		'use-isnan': 'error',
		'vars-on-top': 'warn',

		// react plugin
		'react/default-props-match-prop-types': 'warn',
		'react/sort-comp': 'warn',
		'react/sort-prop-types': ['warn', {
			ignoreCase: true,
			requiredFirst: true,
			sortShapeProp: true
		}],
		'react/void-dom-elements-no-children': 'error',

		// react plugin - jsx rules
		'react/forbid-foreign-prop-types': 'warn',
		'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
		'react/jsx-curly-spacing': ['warn', 'never'],
		'react/jsx-equals-spacing': ['warn', 'never'],
		'react/jsx-first-prop-new-line': ['warn', 'multiline'],
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-indent-props': ['warn', 'tab'],
		'react/jsx-props-no-multi-spaces': 'warn',
		'react/jsx-sort-default-props': ['warn',{
			ignoreCase: true
		}],
		'react/jsx-tag-spacing': ['warn', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never'
		}],

		// babel plugin
		'babel/object-curly-spacing': ['warn', 'never'],

		// enact plugin
		'enact/display-name': 'warn',
		'enact/kind-name': 'warn',
		'enact/prop-types': ['warn', {'ignore': ['children', 'className', 'style']}]
	},
	overrides: [
		{
			files: [
				'**/__tests__/**/*.{js,jsx,ts,tsx}',
				'**/?(*.)(spec|test).{js,jsx,ts,tsx}',
				'**/*-specs.{js,jsx,ts,tsx}',
				'tests/screenshot/**/*',
				'tests/ui/**/*'
			],
			rules: {
				// disallow describe.only and test.only
				"no-restricted-properties": ['error', {
					"object": "describe",
					"property": "only"
				}, {
					"object": "test",
					"property": "only"
				}]
			}
		}
	]
};
