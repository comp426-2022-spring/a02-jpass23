/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */
export {coinFlip, coinFlips, countFlips, flipACoin};
/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return Math.floor(Math.random()*2) ? 'heads' : 'tails';
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  var arr = []
  for (let i = 0; i<flips; i++){
    arr[i] = coinFlip(); 
  }
  return arr;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  const counter = {
    heads: 0,
    tails: 0,
  }
  array.forEach(element => {
    (element=='heads') ? counter.heads += 1 : counter.tails += 1;
  });
  if(counter.heads == 0){
    return {tails: counter.tails};
  }
  if(counter.tails == 0){
    return {heads: counter.heads};
  }
  return counter
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  const object = {
    call: '',
    flip: '',
    result: '',
  }
  object.call = call;
  object.flip = coinFlip();
  (object.flip == object.call) ? object.result = 'win' : object.result = 'lose';
  return object;
}

/** Export 
 * 
 * Export all of your named functions
*/
//