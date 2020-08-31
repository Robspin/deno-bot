// @ts-ignore
import { WebSocket } from 'https://deno.land/x/websocket/mod.ts';

const binanceSocket: WebSocket = new WebSocket(
   'wss://stream.binance.com:9443/ws/btcusdt@trade'
);

binanceSocket.on('open', function () {
   console.log('ws connected!');
});

binanceSocket.on('message', function (event: object) {
   console.log(event);
});
