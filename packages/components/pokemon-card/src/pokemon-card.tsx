import { FC } from 'react';
import type { PokemonCardProps } from './types';

export const PokemonCard: FC<PokemonCardProps> = ({
	image,
	name,
	hp,
	attack,
	specialAttack,
	specialDefense,
	speed,
}) => {
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
				<button className="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-xl rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
					Gotta Catch &apos;Em All
				</button>
			</div>
		</>
	);
};
