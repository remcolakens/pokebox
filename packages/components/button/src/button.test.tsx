import { render, screen } from '@testing-library/react';
import { Button } from './index';

test('Button renders with the provided text', () => {
	render(<Button>React</Button>);

	expect(screen.getByText('React')).toBeInTheDocument();
});

test('Button onClick event works as expected', () => {
	let clickCount = 0;
	render(<Button onClick={() => clickCount++}>Click me</Button>);

	const buttonElement = screen.getByText('Click me');

	buttonElement.click();
	expect(clickCount).toBe(1);
});

test('Button matches snapshot', () => {
	const { asFragment } = render(<Button>Snapshot Test</Button>);
	expect(asFragment()).toMatchSnapshot();
});
