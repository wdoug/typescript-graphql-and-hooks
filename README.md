# TypeScript, GraphQL, and Hooks

This is a demo repo to accompany a lightning talk I gave on using these technologies together. This showcases some of the best tools I currently (Spring 2019) know of for interacting with data on a server.

The lightning talk on this subject can be found [here](https://youtu.be/iBlGIS-UQsw?t=1196)

## Technologies Overview

Backend
- [Prisma](https://www.prisma.io/) - generates a GraphQL API and ORM-style client based on a database graphql schema description
- [Nexus](https://nexus.js.org/) - Declarative, Code-First GraphQL Schemas with generated TypeScript to maximize TypeScript benefit with minimal manual typings
- Built on top of some [prisma-examples](https://github.com/prisma/prisma-examples), primarily [this one](https://github.com/prisma/prisma-examples/tree/master/typescript/graphql-auth)

API
- [GraphQL](https://graphql.org/)

Frontend
- [Create-React-App](https://github.com/facebook/create-react-app) (created with the [typescript flag](https://facebook.github.io/create-react-app/docs/adding-typescript#docsNav))
- [react-apollo-hooks](https://github.com/trojanowski/react-apollo-hooks) - use the react apollo client tooling within [React hooks](https://reactjs.org/docs/hooks-intro.html)

Tools
- [graphql-code-generator](https://graphql-code-generator.com/) for automatically generating TypeScript types based on graphql on the client
- [eslint](https://eslint.org/)
  - [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql) for lint client graphql queries against the schema
  - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) for linting TypeScript
- [prettier](https://prettier.io/)

## Setup

1. Install the correct node version defined in the `.nvmrc` file
  - If you have [nvm](https://github.com/creationix/nvm) this can be installed with `nvm install`
2. [Install yarn](https://yarnpkg.com/en/docs/install)
3. Run `yarn` to install global dependencies
4. cd into `server` directory and follow the readme steps there
5. cd into the `client` directory and follow the readme steps there