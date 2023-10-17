import { Button } from '@pokebox/button';
import { FC } from 'react';
import PokemonStat from './pokemon-stat';
import type { PokemonCardProps } from './types';

export const PokemonCard: FC<PokemonCardProps> = ({
	name,
	image,
	stats,
	handleOnClick,
}) => {
	const { hp, attack, specialAttack, specialDefense, speed } = stats;

	return (
		<>
			<div className="col-span-1 flex justify-center items-center">
				<img src={image.src} alt={image.alt} className="w-40 object-cover" />
			</div>

			<div className="grid grid-cols-2 gap-4 col-span-1">
				<PokemonStat label="Name" value={name} className="col-span-2" />
				<PokemonStat label="Hp" value={hp} />
				<PokemonStat label="Attack" value={attack} />
				<PokemonStat label="Special attack" value={specialAttack} />
				<PokemonStat label="Special defense" value={specialDefense} />
				<PokemonStat label="Speed" value={speed} />
			</div>

			<div className="flex justify-center mt-8 col-span-1 md:col-span-2">
				<Button
					size="default"
					variant="default"
					onClick={handleOnClick}
					data-testid="random-pokemon-button"
				>
					Gotta Catch &apos;Em All
				</Button>
			</div>
		</>
	);
};
