<p align="center">
  A challenge for a backend dev position at LAMAKERS. Also familiarizing myself with the framework. </br>
  The mini project has a static webpage with an input. The input has a datalist with few urls. </br>
  The api endpoints are built as per the specs. </br>
  Using sse as an alternative way to deliver the resuts. </br>
  Current implementation basically fanouts the result to whoever is connected. No differentiation per client. </br>
  This, however does somehow contradict to the specs in term of acking the message (who and how)?
  How: do we need to ack using the same protocol which delivered the message? Or same meaning the conventional one?
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
