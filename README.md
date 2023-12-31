# Avenue QA Challenge

Avenue challenge for the QA position using [Cypress](https://cypress.io).

## Pre-requirements

You need to have [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) installed on your computer.

For this project, the following versions of node and yarn were used:

```sh
$ node -v
v18.15.0

$ yarn -v
1.22.19
```

## Installation

Run `yarn install` to install the dev dependencies.

## Test Plan

Check the [Avenue Test Plan](./testPlan.md) to see the full details.

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

> **Important**
>
> **The accessibility tests are failling!** Due to a accessibility bugs founded during tests.

### Dashboard of Test Results

The pipeline is integrated with the Cypress Dashboard. The smoke tests is running in every push or pull request to main branch. You can access the [Dashboard](https://cloud.cypress.io/projects/k5pkre/runs/) to see the results.


