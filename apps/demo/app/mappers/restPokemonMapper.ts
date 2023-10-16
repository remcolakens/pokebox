import type { BasePokemonProps } from '@pokebox/pokemon-card';
import { capitalizeFirstLetter } from '~/utils/capitalizeFirstLetter';

const pokemonStatMapper = (stat: any) => {
	const stats = {
		hp: 0,
		attack: 0,
		defense: 0,
		speed: 0,
		specialAttack: 0,
		specialDefense: 0,
	};

	stat.forEach((item: any) => {
		const statName = item.stat?.name;
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

const restPokemonMapper = (pokemon: any): BasePokemonProps => {
	if (!pokemon) {
		throw new Error('Pokemon not found');
	}

	const { id, name } = pokemon;

	return {
		id: id,
		name: capitalizeFirstLetter(name),
		stats: pokemonStatMapper(pokemon.stats),
		image: {
			src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
			alt: name,
		},
	};
};

export { restPokemonMapper };
