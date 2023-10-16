import { gql } from 'graphql-request';

export const GET_POKEMON_BY_ID = gql`
	query getPokemonInfo($id: Int!) {
		pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
			id
			name
			pokemon_v2_pokemonstats {
				base_stat
				pokemon_v2_stat {
					name
				}
			}
		}
	}
`;
