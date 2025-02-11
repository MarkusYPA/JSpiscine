
// Will be added automatically:
/* const hashCode = str =>
    (
        [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
    ).toString(36) */


function blockChain(data, prev = { index: 0, hash: 0 }) {
    let newBlock = {};
    newBlock.index = prev.index + 1;
    let strToHash = String(newBlock.index) + prev.hash + JSON.stringify(data);
    newBlock.hash = hashCode(strToHash);
    newBlock.data = data;
    newBlock.prev = prev;

    // Doesn't work because it needs to take the 'this' as the second argument
    // and some later given value as the first
    //newBlock.chain = blockChain // NO PARENTHESES, so we don't call the function

    newBlock.chain = function (nextData) {
        return blockChain(nextData, this); // `this` is the current block
    };

    return newBlock;
}

/* 
const first = blockChain({ a: 1 })
console.log(first.index) //           -> 1
console.log(first.data) //            -> { a: 1 }
console.log(first.prev) //            -> { index: 0, hash: "0" }
console.log(first.hash) //            -> '1103f27'
console.log(hashCode('10{"a":1}')) // -> '1103f27'

const second = first.chain({ hello: 'world' })
console.log(second.hash) //                           -> '18drvvc'
console.log(hashCode('21103f27{"hello":"world"}')) // -> '18drvvc'

const chain = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

const fork = second
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

console.log(chain.hash) //  -> '1qr3qfs'
console.log(fork.hash) //   -> '1x9gsc1'
console.log(chain.index) // -> 5
console.log(fork.index) //  -> 5
 */
