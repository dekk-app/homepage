module.exports = {
	hooks: {
		"commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
		"pre-push": "xo",
		"pre-commit": "yarn xo && yarn stylelint",
	},
};
