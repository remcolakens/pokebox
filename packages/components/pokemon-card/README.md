# @pokebox/pokemon-card

This card shows some basic information about a Pokemon

## Installation

To install and start using this package simply run:

```
pnpm add @pokebox/pokemon-card
```

Now you can use the component in your project:

```js
import { PokemonCard } from '@pokebox/pokemon-card';

<PokemonCard
	id={2}
	name={'Pickachu'}
	image={{
		src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
		alt: 'Pikachu',
	}}
	stats={{
		hp: 35,
		attack: 55,
		specialAttack: 50,
		specialDefense: 50,
		speed: 90,
	}}
	handleOnClick={() => handleNavigation('/pokemon/2')}
/>;
```

As you can see the component itself does not fetch any data. It only displays the data that is passed to it. This is to make it more flexible and reusable. You can use this component in a list of Pokemon, or in a single Pokemon page.

## Troubleshooting

To render the styling correctly, you will need to have tailwindcss installed and configured. See [Tailwind CSS installation](https://tailwindcss.com/docs/installation) for more information.
