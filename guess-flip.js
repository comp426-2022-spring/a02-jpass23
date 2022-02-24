import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2));

// if (args['call'] == null){
//     console.log("Error: no input.")
// }else if (args['call']=='heads'){

// }
console.log((args['call']=='heads') || (args['call']=='tails') ? flipACoin(args['call']) : console.log("Error: No input.\nUsage: node guess-flip --call=[heads|tails]"));
