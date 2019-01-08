// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,

	parserOptions: {
		parser: "babel-eslint"
	},

	env: {
		browser: true
	},
	// required to lint *.vue files
	plugins: ["vue", "prettier"],

	// add your custom rules here
	rules: {
		"generator-star-spacing": "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		indent: ["error", "tab"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"prettier/prettier": "error"
	},

	extends: [
		"plugin:vue/recommended",
		"standard",
		"@vue/standard",
		"@vue/prettier",
		"prettier/vue",
		"plugin:prettier/recommended"
	]
};
