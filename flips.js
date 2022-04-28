import minimist from 'minimist';
import {coinFlips, countFlips} from "./modules/coin.mjs";
const args = minimist(process.argv.slice(2));
var y = coinFlips((isFinite(args['number']))?args['number']:1);
console.log(y);
console.log(countFlips(y));
//