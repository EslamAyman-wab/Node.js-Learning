# Node.js + Express Learning Roadmap

Use this checklist to track the topics covered by your course. Check a box only after you have practiced the topic yourself and can explain it in your own words—not just after watching a video.

**Checklist status**
- [ ] Not completed yet
- [x] Understood and practiced independently

## Chapter 1 — Development Environment and Project Setup

- [ ] Install Node.js and verify the installation with `node -v` and `npm -v`.
- [ ] Run a JavaScript file with `node filename.js`.
- [ ] Initialize a project with `npm init` and understand the purpose of `package.json`.
- [ ] Install and uninstall packages; understand the difference between `dependencies` and `devDependencies`.
- [ ] Add run commands to `scripts` and execute them with `npm run`.
- [ ] Understand Node.js module systems: CommonJS (`require` / `module.exports`) and ES Modules (`import` / `export`), and know which one your project uses.

**Completion criteria:** I can create a new Node.js project, split code into multiple files, import and export functions, and run the project using an npm script.

## Chapter 2 — Node.js Fundamentals

- [ ] Explain the difference between JavaScript in a browser and JavaScript running in Node.js.
- [ ] Recognize built-in modules such as `node:path`, `node:fs`, and `node:http` and know what they are used for.
- [ ] Read and write files using the asynchronous APIs provided by `node:fs`.
- [ ] Use `path.join()` and other `node:path` methods to work with file paths safely.
- [ ] Understand `process` and use `process.argv` and `process.env` when appropriate.
- [ ] Understand environment variables and configuration files; avoid hardcoding secrets in source code.
- [ ] Understand the basic purpose of `EventEmitter` and events in Node.js.
- [ ] Understand the basic purpose of Buffers and Streams and recognize when they may be useful.
- [ ] Understand the program lifecycle, read stack traces, and identify common runtime errors.
- [ ] Handle errors from asynchronous operations appropriately; do not silently ignore errors or leave Promise rejections unhandled.
- [ ] Explain the basic idea of the Event Loop and why CPU-heavy synchronous work can block a server.

**Completion criteria:** I can write a Node.js program that reads a file, processes its contents, and writes the result to another file while handling paths and errors without copying the lesson's solution.

## Chapter 3 — HTTP with Node.js Before Express

- [ ] Create an HTTP server using `node:http` and `createServer()`.
- [ ] Explain the roles of `req` and `res` and how an HTTP request reaches the server.
- [ ] Read the request URL and HTTP methods such as `GET` and `POST`.
- [ ] Return an appropriate status code, headers, and response body.
- [ ] Understand JSON and how request and response data are exchanged.
- [ ] Create multiple simple routes manually and explain why route handling becomes harder to maintain as an application grows.

**Completion criteria:** I can build a small HTTP server from scratch, receive a request, return the correct response, and explain what happens from request arrival to response completion.

## Chapter 4 — Express Fundamentals

- [ ] Install `express`, create an application, and listen on a specified port.
- [ ] Create routes using `app.get()`, `app.post()`, `app.patch()` or `app.put()`, and `app.delete()`.
- [ ] Explain the difference between an HTTP method and a route path.
- [ ] Read `req.params`, `req.query`, and `req.body`, and explain when each is used.
- [ ] Use `express.json()` before routes that need to read JSON request bodies.
- [ ] Send responses with `res.status()`, `res.json()`, and `res.send()`.
- [ ] Understand middleware, its execution order, the role of `next()`, and when a response should be completed.
- [ ] Use `express.Router()` to split routes into separate files instead of placing everything in one file.
- [ ] Recognize built-in middleware and understand when third-party middleware may be useful.
- [ ] Test requests and responses with Postman or a similar API client, including HTTP status codes.

**Completion criteria:** I can build an Express application with several routes, accept JSON input, return appropriate responses and status codes, and explain the middleware execution order.

## Chapter 5 — API Design and Data Handling

- [ ] Understand the basics of REST and choose appropriate routes and HTTP methods for resources.
- [ ] Separate routes from controllers and organize the project files clearly.
- [ ] Keep request-handling code separate from application logic when it improves clarity and maintainability.
- [ ] Implement CRUD operations using an in-memory array; do not add a database at this stage.
- [ ] Validate user input before using it and reject invalid data with a clear response.
- [ ] Handle common cases such as a missing resource, invalid input, and an unsupported route.
- [ ] Create centralized error-handling middleware and understand where it belongs in the middleware order.
- [ ] Understand how asynchronous errors are handled in the version of Express used by the course.
- [ ] Use environment variables for application settings and never commit secret values to Git.
- [ ] Add basic request and error logging; understand the basics of CORS and avoid exposing internal error details to clients.

**Completion criteria:** I can create, read, update, and delete resources through an API, validate inputs, and handle errors without duplicating the same error-handling logic in every route.

## Chapter 6 — Testing and Final Project

- [ ] Test successful requests and error cases with Postman or a similar tool.
- [ ] Write basic automated tests for application logic or API routes using the testing tools covered by the course.
- [ ] Ensure every expected request path returns an appropriate response instead of remaining pending indefinitely.
- [ ] Build a small final project: a **Tasks API** for managing tasks, using Express and temporary in-memory storage.
- [ ] Implement endpoints to list tasks, create a task, update a task, and delete a task.
- [ ] Validate incoming data and return appropriate responses for invalid input.
- [ ] Return a `404` response for unknown routes or resources that do not exist.
- [ ] Implement centralized error handling.
- [ ] Organize the project into clear files and document how to install and run it in the README.

**Important:** In-memory data is lost when the server restarts. This is intentional for this stage; database integration comes later.

## Chapter 7 — Readiness Check

- [ ] I can build the Tasks API from scratch without following a video step by step.
- [ ] I can explain the request lifecycle: **Request → Middleware → Route/Controller → Application Logic → Response**.
- [ ] I can explain `req.params`, `req.query`, and `req.body` and choose appropriate HTTP status codes.
- [ ] I can trace errors and return appropriate responses instead of hiding or ignoring errors.
- [ ] I can test the main endpoints and important error cases independently.
- [ ] I can explain which features are still missing because the project does not use a database.

If I cannot meet one of these criteria, I should revisit that topic and practice it before moving on. After completing this roadmap, the next learning stage is **SQL and NoSQL databases**.

## Official References

- [Node.js — Introduction](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [Node.js — API Documentation](https://nodejs.org/api/)
- [Express — Guide](https://expressjs.com/en/guide/)
- [Express — Routing](https://expressjs.com/en/5x/guide/routing.html)
- [Express — Using Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Express — Error Handling](https://expressjs.com/en/guide/error-handling.html)
