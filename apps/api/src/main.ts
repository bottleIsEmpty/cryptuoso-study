import * as express from 'express';
import * as cors from 'cors';
import { createClient } from 'redis';

const redisClient = createClient(6379, 'localhost');

redisClient.on('error', e => console.log(e));

const app = express();

app.use(cors())

app.get('/api/redis', (req, res) => {
  redisClient.xadd('teststream', ['*', 'message', req.connection.remoteAddress || req.headers['x-forwarded-for']]);
  res.sendStatus(200);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
