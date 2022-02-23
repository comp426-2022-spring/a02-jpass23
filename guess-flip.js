import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2));
console.log((args['call']=='heads') || (args['call']=='tails') ? flipACoin(args['call']) : "Error: No input.\nUsage: node guess-flip --call=[heads|tails]");
