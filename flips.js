import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
var x = coinFlips(args['number']);
console.log(x);
console.log(countFlips(x));
