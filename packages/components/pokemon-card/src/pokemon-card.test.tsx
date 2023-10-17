import { render, screen } from '@testing-library/react';
import { expect, vi } from 'vitest';
import { PokemonCard } from './index';

const mockHandleClick = vi.fn();

const samplePokemonData = {
	id: 25,
	name: 'Pikachu',
	image: {
		src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
		alt: 'Pikachu',
	},
	stats: {
		hp: 35,
		attack: 55,
		specialAttack: 50,
		specialDefense: 50,
		speed: 90,
	},
	handleOnClick: mockHandleClick,
};

test('Pokemon card renders with the correct name', () => {
	render(<PokemonCard {...samplePokemonData} />);

	expect(screen.getByText('Pikachu')).toBeInTheDocument();
});

test('Pokemon card displays the correct image', () => {
	render(<PokemonCard {...samplePokemonData} />);

	const imageElement = screen.getByAltText('Pikachu');
	expect(imageElement).toBeInTheDocument();
	expect(imageElement).toHaveAttribute('src', samplePokemonData.image.src);
});

test('Pokemon card renders stats correctly', () => {
	render(<PokemonCard {...samplePokemonData} />);

	const { stats } = samplePokemonData;
	expect(screen.getByText('Hp')).toBeInTheDocument();
	expect(screen.getByText(stats.hp)).toBeInTheDocument();
});

test('Pokemon card calls the onClick handler when clicked', () => {
	render(<PokemonCard {...samplePokemonData} />);

	const cardElement = screen.getByTestId('random-pokemon-button');
	cardElement.click();
	expect(mockHandleClick).toHaveBeenCalled();
});
