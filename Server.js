const express = require('express');
const http = require('http');

const userRouter = require('./routers/UserRouter');
const bookRouter = require('./routers/BookRouter');

const app = express();
const port = 8081;

app.use(express.json());

app.use('/lib', userRouter);
app.use('/lib', bookRouter);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('HTTP server listening on port 8081');
});
