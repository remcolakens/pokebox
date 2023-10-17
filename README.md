<p align="center">
	<img src="https://i.ibb.co/pX4NZhN/cbaa725ea5a65889e1760fdf1e46a3b6.png" alt="Pokebox" width="250" />
</p>

Pokebox is a monorepo project that demonstrates how to use both GraphQL and REST from the [PokeAPI](https://pokeapi.co/). It helps you learn how to fetch data from this API and display it in a React app. It's all about keeping your code clean and organized while having fun with Pokémon data.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
- [Apps \& Packages](#apps--packages)
- [Useful Commands](#useful-commands)

## Features

This monorepo include some common tools you'll need to get started, including the following:

- [Turborepo](https://turbo.build/repo) - High-performance build system for Monorepos
- [React](https://reactjs.org/) - JavaScript library for user interfaces
- [Tsup](https://github.com/egoist/tsup) - TypeScript bundler powered by esbuild
- [TypeScript](https://www.typescriptlang.org/) - for static type checking
- [ESLint](https://eslint.org/) - for code linting
- [Prettier](https://prettier.io) - for code formatting
- [Changesets](https://github.com/changesets/changesets) - for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) - for continuous integration and deployment (CI/CD)

## Installation

To get started with this project, follow these steps:

1. Before you get started, make sure you have `pnpm` installed on your local machine. If you don't have it installed yet, you can follow the installation instructions provided [here](https://pnpm.io/installation)
2. Clone this repository to your local machine by running the following command in your terminal:

   ```
    git clone https://github.com/remcolakens/pokebox
   ```

3. Once you have cloned the repository, navigate to the project's root and install the dependencies by using: `pnpm install`
4. Now you will have to build the front-end and packages. You can do this by running `pnpm build`
5. You're all set! Run `pnpm dev` to start the local development server.

_Note: don't skip the order of the steps above. If you do, you might run into some issues._

## Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/demo`: A demonstration project showcasing all the components built using the Remix framework.
- `packages/components`: This directory contains the core React components.
- `packages/configs`: Contains shareable configuration files for Eslint and Typescript used throughout the Turborepo.
- `packages/utilities`: This directory houses utility functions used throughout the Turborepo.

## Useful Commands

Here are some useful commands you can run from the root of the project:

- `pnpm build` - Build all packages
- `pnpm dev` - Run all packages locally and preview in Remix app
- `pnpm lint` - Lint all packages
- `pnpm test` - Run unit tests for all packages
- `pnpm changeset` - Generate a changeset
- `pnpm create:pkg` - Generates boilerplate for a new package
- `pnpm clean` - Clean up all `node_modules`, `.turbo` and `dist` folders (runs each package's clean script)
