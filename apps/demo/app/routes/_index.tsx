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
					<div className="col-span-1">Pokemon image</div>

					<div className="grid grid-cols-2 gap-4 col-span-1">
						<div className="col-span-2">
							<h4 className="font-bold">Name</h4>
							<span>Pichachu</span>
						</div>
						<div>
							<h4 className="font-bold">Hp</h4>
							<span>49</span>
						</div>
						<div>
							<h4 className="font-bold">Attack</h4>
							<span>49</span>
						</div>
						<div>
							<h4 className="font-bold">Special attack</h4>
							<span>65</span>
						</div>
						<div>
							<h4 className="font-bold">Special defense</h4>
							<span>65</span>
						</div>
						<div>
							<h4 className="font-bold">Speed</h4>
							<span>45</span>
						</div>
					</div>

					<div className="w-full flex justify-center mt-8 col-span-1 md:col-span-2">
						<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
							Gotta catch em
						</button>
					</div>
				</main>
			</div>
		</div>
	);
}
