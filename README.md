# Online Shop App

Online shop application implemented using NestJS, TypeORM and GraphQL API's with Authentication and authorization.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## configuration Database in app.module.ts

type: 'postgres',
host: 'localhost',
port: 5432,
username: 'xxxxxxx',
password: 'xxxxxxx',
database: 'xxxxxx',

## GraphQL API documentation

### Queries

type Query {

findAllProducts: [Product!]!

findProductById(id: Int!): Product!

findAllCategories: [Category!]!

findCategoryById(id: Int!): Category!

findProductByCategoryId(id: Int!): [Product!]!

#### protected with Admin Token
findAllUsers: [AppUser!]!

findUserById(id: Int!): AppUser!

singIn(name: String!, password: String!): String!
}

### Mutations

type Mutation {

createProduct(createProductInput: CreateProductInput!): Product!

updateProduct(updateProductInput: UpdateProductInput!): Product!

removeProduct(id: Int!): Product!

createCategory(createCategoryInput: CreateCategoryInput!): Category!

createAppUser(createAppUserInput: CreateAppUserInput!): AppUser!

updateAppUser(updateAppUserInput: UpdateAppUserInput!): AppUser!

#### protected with Admin Token
removeAppUser(id: Int!): AppUser!
}

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Sajid Ali
