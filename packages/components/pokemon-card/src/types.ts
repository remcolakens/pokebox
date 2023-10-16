export type BasePokemonProps = {
	id: number;
	name: string;
	image: {
		src: string;
		alt: string;
	};
	stats: {
		hp: number;
		attack: number;
		specialAttack: number;
		specialDefense: number;
		speed: number;
	};
};

export type PokemonCardProps = BasePokemonProps & {
	handleOnClick: () => void;
};
