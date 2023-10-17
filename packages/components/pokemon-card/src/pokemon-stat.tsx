import { cn } from '@pokebox/tailwind-utils';
import { FC } from 'react';
import { PokemonStatProps } from './types';

const PokemonStat: FC<PokemonStatProps> = ({ label, value, className }) => {
	return (
		<div className={cn(className)}>
			<h4 className="font-bold">{label}</h4>
			<span>{value}</span>
		</div>
	);
};

export default PokemonStat;
