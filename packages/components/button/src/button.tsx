import { cn } from '@pokebox/tailwind-utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { ButtonProps } from './types';

const buttonVariants = cva(
	'font-bold focus:ring-4 text-xl rounded-lg mr-2 mb-2 focus:outline-none',
	{
		variants: {
			variant: {
				default:
					'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
			},
			size: {
				default: 'px-5 py-2.5',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = 'Button';

export { Button, buttonVariants };
