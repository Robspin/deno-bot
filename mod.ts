import * as log from 'https://deno.land/std/log/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const APIKEY: string = config().APIKEY;
const SECRETKEY: string = config().SECRETKEY;
