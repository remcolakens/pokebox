import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokebox' },
		{ name: 'description', content: 'Gotta catch em all!' },
	];
};

export default function Index() {
	return (
		<h1 className="text-3xl font-bold underline text-purple-500">
			Hello world!
		</h1>
	);
}
