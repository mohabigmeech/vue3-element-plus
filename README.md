# sandbox-vue3

Sandbox developing with [Vue 3](https://vuejs.org/) in [Vite](https://vitejs.dev/).

✅ Node requirements : [14.4.0](https://nodejs.org/en/)

✅ NPM requirements : [6.14.5](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Modules

- State Manager : [Pinia](https://pinia.vuejs.org/)

- Unit Test : [Vitest](https://vitest.dev/)

- End-to-end Test : [Cypress](https://www.cypress.io/)

- Code Cleaner : [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## Recommended IDE Setup

- Install [VSCode](https://code.visualstudio.com/)

- Install [Volar extension](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) on VSCode (and disable Vetur)

- Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) on VSCode

- Change VSCode settings :

```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
```

## Project Install

```sh
npm install
```

### Project launch

```sh
npm run dev
```

### Clean with ESLint & Prettier

```sh
npm run clean
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```
