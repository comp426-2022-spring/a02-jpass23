import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2));

if (args['call'] == null){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}else if (args['call']=='heads' || args['call']=='tails'){
    console.log(flipACoin(args['call']))
}else{
    console.log("Usage: node guess-flip --call=[heads|tails]")
}