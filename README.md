# Avenue QA Challenge

Avenue challenge for the QA position using [Cypress](https://cypress.io).

## Pre-requirements

You need to have [Node.js](https://nodejs.org/) and yarn installed on your computer.

For this project, the following versions of node and npm were used:

```sh
$ node -v
v18.15.0

$ yarn -v
1.22.19
```

## Installation

Run `yarn install` to install the dev dependencies.

## Tests

> Before running the tests, create a file called `cypress.env.json` in the project root directory, based on the [`cypress.env.example.json`](./cypress.env.example.json) file, and update the value of the `api_key` property with one of your choice.

### Headless mode

Run `yarn test` to run all tests in headless mode.

Run `yarn test:api` to run only the API tests in headless mode.

Run `yarn test:ui` to run only the UI tests in headless mode.

Run `yarn test:smoke` to run only the tests with smoke tags in headless mode.

### Interactive mode

1. Run `yarn cy:open` to open the Cypress App;
2. Select E2E Testing;
3. Select one of the available browsers (e.g., Electron), and click the Start button;
4. Finally, click on the test file you want to run and wait for it to finish.

> **Important notes about the above the tests**
>
> **The accessibility tests are failling!** Due to a accessibility bugs founded during tests.

