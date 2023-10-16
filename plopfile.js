/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
	const workspaces = ['components'];

	const validateInput = (value) => {
		if (value.trim().length === 0) {
			return 'This field is required.';
		}
		return true;
	};

	plop.setGenerator('component', {
		description: 'Generates a component package',
		prompts: [
			{
				type: 'input',
				name: 'componentName',
				message: 'Enter component name:',
				validate: validateInput,
			},
			{
				type: 'input',
				name: 'description',
				message: 'The description of this component:',
				validate: validateInput,
			},
			{
				type: 'list',
				name: 'outDir',
				message: 'where should this component or package live?',
				default: 'components',
				choices: workspaces,
			},
		],
		actions(answers) {
			const actions = [];

			if (!answers) return actions;

			const { componentName, description, outDir } = answers;

			actions.push({
				type: 'addMany',
				templateFiles: 'plop/component/**',
				destination: `./packages/{{outDir}}/{{dashCase componentName}}`,
				base: 'plop/component',
				data: { description, componentName, outDir },
				abortOnFail: true,
			});

			return actions;
		},
	});
};
