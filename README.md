# app

## Project Setup

1. Install [Yarn](https://yarnpkg.com/)
2. Install [nvm](https://github.com/nvm-sh/nvm)
3. Clone this repository
4. Create a [Github Token](#github-token)

## Github Token

Visit the [Github Token page](https://github.com/settings/tokens/new) and create a new token.
Give access to `read:packages`.

![Github Token](./docs/github-app.png)

Add the token to your .bashrc or similar file. This step is required before you proceed.

```sh
export GITHUB_TOKEN_DEKK_PACKAGES=xxxxxxxxxxxxxxxxxxxxxxxx
```

## Install packages

Calling `yarn install` will write a file (`.npmrc`). Please check that it includes your GitHub token.
If the file is not created you can also call `yarn setup:npm`.
If the file has been creted but does not include the token, make sure you exported it correctly and
opened a new Terminal window.

> The `.npmrc` file is required to allow access to private GitHub packages.

Make sure to call `nvm use` before proceeding.
(Check [nvm's docs on deeper shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration)
to learn how to call `nvm use` automatically)

```
cd path/to/dekk/app
nvm use
yarn install
```

## Develop

To start developing start the next.js development script and open http://localhost:3000

```sh
yarn dev
```
