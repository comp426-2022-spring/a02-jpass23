import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2));
console.log(isFinite(args['call']) ? flipACoin(args['call']) : "Error: No input.\nUsage: node guess-flip --call=[heads][tails]");