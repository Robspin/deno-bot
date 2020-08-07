import * as log from 'https://deno.land/std/log/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
// import { sha256 } from 'https://deno.land/x/sha256@v1.0.2/mod.ts';
import { hmac } from 'https://deno.land/x/hmac@v1.0.2/mod.ts';

const APIKEY: string = config().APIKEY;
const SECRETKEY: string = config().SECRETKEY;

const endPoint: string = '/api/v3/account';
const dataQueryString: string = 'recvWindow=20000&timestamp=' + Date.now();

const signature = hmac('sha256', SECRETKEY, dataQueryString, 'utf8', 'hex');

const URL: string = `https://api.binance.com${endPoint}?${dataQueryString}&signature=${signature}`;

console.log(URL);
