module.exports = {
	hooks: {
		"commit-msg": "yarn commitlint --edit $1",
		"pre-push": "yarn lint",
	},
};
