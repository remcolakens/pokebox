import { PokemonCard } from '@pokebox/pokemon-card';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokebox' },
		{ name: 'description', content: 'Gotta catch em all!' },
	];
};

export default function Index() {
	return (
		<div>
			<img
				src="/pokebox-bg.png"
				alt="pokebox background"
				className="pointer-events-none h-screen w-screen object-cover absolute inset-0 brightness-75 -z-10"
			/>

			<div className="container mx-auto">
				<img
					src="/pokebox-logo.png"
					alt="pokebox logo"
					className="w-64 md:w-84 mt-8 mx-auto"
				/>

				<main className="bg-white rounded-lg p-4 mt-8 mx-2 md:w-1/2 md:mx-auto grid grid-cols-1 md:grid-cols-2 border-4 border-blue-400">
					<PokemonCard
						image={{
							src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
							alt: 'Pikachu',
						}}
						name="Pikachu"
						hp="25"
						attack="10"
						specialAttack="5"
						specialDefense="3"
						speed="9"
					/>
				</main>
			</div>
		</div>
	);
}
