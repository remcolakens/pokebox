import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	generates: {
		'pokemon-api.generated.d.ts': {
			schema: 'https://beta.pokeapi.co/graphql/v1beta',
			plugins: ['typescript'],
			documents: ['app/graphql/*.{ts,tsx}'],
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
};

export default config;
