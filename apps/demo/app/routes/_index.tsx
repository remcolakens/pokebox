import { PokemonCard } from '@pokebox/pokemon-card';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData, useNavigate } from '@remix-run/react';
import type { Query_Root } from 'pokemon-api.generated';
import { GET_POKEMON_BY_ID } from '~/graphql/get-pokemon-by-id';
import { graphQLClient } from '~/lib/graphql-client.server';
import { graphPokemonMapper } from '~/mappers/graphPokemonMapper';
import { restPokemonMapper } from '~/mappers/restPokemonMapper';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokebox' },
		{ name: 'description', content: 'Gotta catch em all!' },
	];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const searchParams = new URLSearchParams(url.search);

	const restApi = searchParams.get('rest');

	const randomPokemon = Math.floor(Math.random() * 151) + 1;

	let pokemon;

	if (!restApi) {
		const data: Query_Root = await graphQLClient.request(GET_POKEMON_BY_ID, {
			id: randomPokemon,
		});

		pokemon = graphPokemonMapper(data.pokemon_v2_pokemon[0]);
	} else {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
		);
		if (response.ok) {
			const data = await response.json();

			pokemon = restPokemonMapper(data);
		}
	}

	return json({
		restApi,
		pokemon,
	});
};

export default function Index() {
	const { pokemon, restApi } = useLoaderData<typeof loader>();
	const navigate = useNavigate();

	return (
		<div>
			<img
				src="/pokebox-bg.png"
				alt="pokebox background"
				className="pointer-events-none h-full w-full object-cover absolute inset-0 brightness-75 -z-10"
			/>

			<div className="container mx-auto">
				<img
					src="/pokebox-logo.png"
					alt="pokebox logo"
					className="w-64 md:w-84 mt-8 mx-auto"
				/>

				<main className="bg-white rounded-lg p-4 mt-8 mx-2 md:w-1/2 md:mx-auto grid grid-cols-1 md:grid-cols-2 border-4 border-blue-400">
					{pokemon ? (
						<PokemonCard
							id={pokemon.id}
							name={pokemon.name}
							image={{
								src: pokemon.image.src,
								alt: pokemon.image.alt,
							}}
							stats={pokemon.stats}
							handleOnClick={() => navigate(restApi ? '/?rest=true' : '/')}
						/>
					) : null}

					<div className="col-span-1 md:col-span-2">
						<Link
							to={restApi ? '/' : '/?rest=true'}
							className="w-full text-xs hover:underline"
						>
							{restApi ? 'Go to GraphQL version ' : 'Go to rest version'}
						</Link>
					</div>
				</main>
			</div>
		</div>
	);
}
