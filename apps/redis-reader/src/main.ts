import {createClient} from 'redis';

const redisClient = createClient();

redisClient.on('error', () => console.log('Error!'))

let lastMessageId = 0;
let lastConnected = null;

setInterval(() => {
  redisClient.xread('COUNT', 1, 'STREAMS', 'teststream', lastMessageId, (err, res) => {
    if (err || res === null) {
      console.log('no new messages');
      return;
    }

    lastMessageId = res[0][1][0][0];
    lastConnected = res[0][1][0][1][1] || lastConnected;

    console.log(lastConnected);

  });
}, 3000)
