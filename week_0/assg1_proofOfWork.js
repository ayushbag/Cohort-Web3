const crypto = require('crypto')

function hashStartsWithPrefix(prefix) {
    let input = 0;
    while(true) {
        let inputStr = "100xdevs" + input.toString()
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex')
        if (hash.startsWith(prefix)) {
            return {
                input: inputStr,
                hash: hash
            }
        }
        input++;
    }
}

const result = hashStartsWithPrefix('0000')
console.log(`input : ${result.input}`);
console.log(`hash : ${result.hash}`);
