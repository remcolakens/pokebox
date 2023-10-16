import { PokemonCard } from '@pokebox/pokemon-card';
import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import type { Query_Root } from 'pokemon-api.generated';
import { GET_POKEMON_BY_ID } from '~/graphql/get-pokemon-by-id';
import { graphQLClient } from '~/lib/graphql-client.server';
import { graphPokemonMapper } from '~/mappers/graphPokemonMapper';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokebox' },
		{ name: 'description', content: 'Gotta catch em all!' },
	];
};

export async function loader() {
	const randomPokemon = Math.floor(Math.random() * 151) + 1;

	const data: Query_Root = await graphQLClient.request(GET_POKEMON_BY_ID, {
		id: randomPokemon,
	});

	const pokemon = graphPokemonMapper(data.pokemon_v2_pokemon[0]);

	return json({
		pokemon,
	});
}

export default function Index() {
	const { pokemon } = useLoaderData<typeof loader>();
	const navigate = useNavigate();

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
							src: pokemon.image.src,
							alt: pokemon.image.alt,
						}}
						name={pokemon.name}
						hp={pokemon.stats.hp}
						attack={pokemon.stats.attack}
						specialAttack={pokemon.stats.specialAttack}
						specialDefense={pokemon.stats.specialDefense}
						speed={pokemon.stats.speed}
						handleOnClick={() => navigate(0)}
					/>
				</main>
			</div>
		</div>
	);
}
