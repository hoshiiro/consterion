# Consterion

A monorepo for me to test and familiarize myself with Svelte/SvelteKit.

## Setup

```sh
$ pnpm install
```

## How to run an app

Install pnpm and run this command on the root of this repo:

```sh
$ pnpm --filter <apps-name> dev 
# eg: pnpm --filter hello-apps dev
```

### If you get an error, try build all the packages

```sh
$ pnpm --filter ./packages/* run build
```
