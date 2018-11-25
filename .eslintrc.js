module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	// added babel-eslint to remove the parsing error
	parser: 'babel-eslint',
	plugins: ['react'],
	rules: {
		indent: ['error', 4],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};
