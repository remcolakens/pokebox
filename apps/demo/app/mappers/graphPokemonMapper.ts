import type {
	Pokemon_V2_Pokemon,
	Pokemon_V2_Pokemonstat,
} from 'pokemon-api.generated';
import { capitalizeFirstLetter } from '~/utils/capitalizeFirstLetter';

export interface IGraphPokemonMapper {
	id: number;
	name: string;
	stats: {
		hp: number;
		attack: number;
		defense: number;
		speed: number;
		specialAttack: number;
		specialDefense: number;
	};
	image: {
		src: string;
		alt: string;
	};
}

const pokemonStatMapper = (stat: Pokemon_V2_Pokemonstat[]) => {
	const stats = {
		hp: 0,
		attack: 0,
		defense: 0,
		speed: 0,
		specialAttack: 0,
		specialDefense: 0,
	};

	stat.forEach((item) => {
		const statName = item.pokemon_v2_stat?.name;
		const statValue = item.base_stat;

		switch (statName) {
			case 'hp':
				stats.hp = statValue;
				break;
			case 'attack':
				stats.attack = statValue;
				break;
			case 'defense':
				stats.defense = statValue;
				break;
			case 'speed':
				stats.speed = statValue;
				break;
			case 'special-attack':
				stats.specialAttack = statValue;
				break;
			case 'special-defense':
				stats.specialDefense = statValue;
				break;
		}
	});

	return stats;
};

const graphPokemonMapper = (
	pokemon: Pokemon_V2_Pokemon
): IGraphPokemonMapper => {
	if (!pokemon) {
		throw new Error('Pokemon not found');
	}

	const { name, id, pokemon_v2_pokemonstats } = pokemon;

	return {
		id: id,
		name: capitalizeFirstLetter(name),
		stats: pokemonStatMapper(pokemon_v2_pokemonstats),
		image: {
			src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
			alt: name,
		},
	};
};

export { graphPokemonMapper };
