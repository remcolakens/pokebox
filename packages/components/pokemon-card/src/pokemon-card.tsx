import { Button } from '@pokebox/button';
import { FC } from 'react';
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
				<div className="col-span-2">
					<h4 className="font-bold">Name</h4>
					<span>{name}</span>
				</div>

				<div>
					<h4 className="font-bold">Hp</h4>
					<span>{hp}</span>
				</div>

				<div>
					<h4 className="font-bold">Attack</h4>
					<span>{attack}</span>
				</div>

				<div>
					<h4 className="font-bold">Special attack</h4>
					<span>{specialAttack}</span>
				</div>
				<div>
					<h4 className="font-bold">Special defense</h4>
					<span>{specialDefense}</span>
				</div>

				<div>
					<h4 className="font-bold">Speed</h4>
					<span>{speed}</span>
				</div>
			</div>
			<div className="w-full flex justify-center mt-8 col-span-1 md:col-span-2">
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
