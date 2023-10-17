# @pokebox/button

Displays a button or a component that looks like a button.

## Installation

To install and start using this package simply run:

```
pnpm add @pokebox/button
```

Now you can use the component in your project:

```js
import { Button } from '@pokebox/button';

<Button variant="default" size="default">
	This is a button
</Button>;
```

Notice that you have two props to customize the button: `variant` and `size`. When you dont set anything it will fallback to the default values.

## Troubleshooting

To render the styling correctly, you will need to have tailwindcss installed and configured. See [Tailwind CSS installation](https://tailwindcss.com/docs/installation) for more information.
