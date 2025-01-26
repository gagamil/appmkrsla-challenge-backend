## A challenge for a backend dev position at AppMakersLA

Build an URL shortener demo app (backend) on node (JavaScript/TypeScript). The specific requirements are missing so that nobody can simply google then copy and paste without getting to know the codebase and what exactly it does.

I am a backend dev with mostly Python/Django experience (over 15 years). So this challenge was great in terms of looking into how nestjs is designed. Also opinionated but more structured than Django. Great for larger projects.

## Moving parts

Chose nestjs framework.

### WEB UI

For convenience there is a web page with a form to enter an url. It is a static webpage served by nestjs.
When form is successfully submitted via fetch api the endpoint returns http response 201. Also the form is linked to a datalist for convenience.

The shortened URL will come via SSE as a dict. WHen this happens the alert right above the form gets updates.

The user clicks on the link (shortened) and a new window gets opened. The the returned value for this endpoint is a json containing the original url.

### BACKEND

Standard HTTP endpoints:

1st for posting the original URL.
2nd for getting the original using the shortened one.

SSE: using this as a mean to return to the client (actually clients) the just shortened link).
The other obvious option could be a socket connection (which is duplex). However didn't want to use it.

This decision makes the requirement to ack a bit off. Since it should happen via the same mean as delivery.
Still, can ack via a dedicated API endpoint or simply messaging to a queue (makes the backend implementation a bit more separated in terms of concerns). The flag isAck is implemented in the data structure (interface).

As for the use of async ops - did enable nestjs cache system which is by definition async. Thus all calling layers are equally async and ready to switch to traditional databases.

## Unittests.

None.

## NestJS Description

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
```
