/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
// https://github.com/atulmy/crate/tree/master/code
import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
