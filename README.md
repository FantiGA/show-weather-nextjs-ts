# show-weather-nextjs-ts

**English** | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [show-weather-nextjs-ts](#show-weather-nextjs-ts)
  - [Usage](#usage)
    - [Run](#run)
    - [Test](#test)
  - [Demo](#demo)
  - [Architecture](#architecture)
  - [Strategies](#strategies)
  - [Behind the Scenes](#behind-the-scenes)
    - [Several difficulties that impressed me deeply](#several-difficulties-that-impressed-me-deeply)
  - [Maintainers](#maintainers)
  - [License](#license)

Welcome.

This is a project that uses [Next.js](https://nextjs.org), [React](https://react.dev) and [Cypress](https://www.cypress.io), according to [Weather API](https://www.weatherapi.com), you can enter a place name or latitude and longitude to display the weather at a specific location.

## Usage

### Run

To run this project, install it locally using `npm`:

```bash
cd ./show-weather-nextjs-ts
npm i
npm run dev
```

Then you can visit [http://localhost:3000](http://localhost:3000).

### Test

To run `Cypress` tests, open another terminal and type the following command:

```bash
npm run cy:run
```

The results will be output in the terminal later.

Or you can type the following command for manual testing:

```bash
npm run cy:open
```

## Demo

You can also visit a [demo](https://show-weather-nextjs-ts.vercel.app) already deployed in Vercel.

## Architecture

- The main JavaScript framework is [React 18.2](https://react.dev) version. The React framework is [Next.js 14.0.2](https://nextjs.org) version.
- Tested using [Cypress](https://www.cypress.io).
- Followed the type checking and syntax specifications of [TypeScript](https://www.typescriptlang.org/) and [ESLint](https://eslint.org/).
- Used [Prettier](https://prettier.io) for formatting code.
- Adapted to [Chrome 119](https://www.google.com/chrome) version.
- Adapted to desktop and mobile displays. (Responsive web design)
- Used Endpoint and Response information from [Weather API](https://www.weatherapi.com).

## Strategies

- The `/app` directory contains the App routing structure, Layout and Server-side Page skeleton.
- The `/components` directory contains the `Current`, `Detail`, `Forecast` and `Query` components in the page.
  - The `Current` component is used for the weather display in the `Current Weather` section.
  - The `Detail` component is used to display the weather on a specific day.
  - `Forecast` is a subcomponent of the `Next 10 Days` section and displays abbreviated weather and links for a single day.
  - The `Query` component is used to display the form in the Query part, request geographical location permissions from the browser, and receive input content.
- The `/styles` directory contains individual styles for the above components.
- The `/utils` directory has been put into the public section. `getData.ts` uses the `fetch` method to obtain data asynchronously.
- The `/types` directory contains type definitions. Includes all form types, component props types and Response data types.
- The `/cypress/e2e` directory contains some E2E test cases.
- For security reasons, the value of `WEATHER_API_KEY` needs to be set in Node's environment variable in advance to obtain it.
- Send a request to the `Weather API` via the specified method and URL. The returned data will be used to render the page as requested.
- 100% test pass rate.
  - Since `Cypress` does not currently support the `14` version of `Next.js`, component unit testing was not performed, only E2E testing was performed.
- Total time spent: about `19` hours.

## Behind the Scenes

This is the first time I have used `Next.js` and `Cypress`. It took a lot of time to read the documentation and make too many failed attempts in the early stage.

### Several difficulties that impressed me deeply

1. Since the latest `Next.js` 14 version is used this time, some textbooks and problem cases on `Stack Overflow` are even from `Next.js` 10 version and `React` 17 version. I can only look for relevant clues in the official documents, and then slowly explore it myself.
2. I originally wanted to deploy the project on `GitHub Pages`, but the environment variable problem of `Next.js` was more difficult to solve. There were several times when I wanted to give up on `Next.js` and switch directly back to the familiar `React`. After trying several times, I decided to deploy on `Vercel`. Unexpectedly, it went surprisingly smoothly, and there was no need to deal with environment variables specially.
3. Although the latest version of `Cypress` is used, it still does not support the 14 version of `Next.js`, so component unit testing was not conducted, only end-to-end testing was conducted.

## Maintainers

[@FantiGA](https://github.com/FantiGA)

## License

[MIT](LICENSE) © 2023 [@FantiGA](https://github.com/FantiGA)
