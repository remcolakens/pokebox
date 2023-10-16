import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(
	'https://beta.pokeapi.co/graphql/v1beta'
);
