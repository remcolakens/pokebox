export type BasePokemonProps = {
	id: number;
	name: string;
	image: {
		src: string;
		alt: string;
	};
	stats: {
		hp: number;
		speed: number;
		defense: number;
		attack: number;
		specialAttack: number;
		specialDefense: number;
	};
};

export type PokemonStatProps = {
	label: string;
	value: number | string;
	className?: string;
};

export type PokemonCardProps = BasePokemonProps & {
	handleOnClick: () => void;
};
