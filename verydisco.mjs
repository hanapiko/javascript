function discoword(word){
    const mid = Math.ceil(len(word)/2)
    const firsthalf = word.slice(0,mid)
    const lasthalf = word.slice(mid)
    return lasthalf + firsthalf
}

function sentence(sentence){
    return sentence
    .split(' ')
    .map(discoword)
    .join(' ')
}

const args = process.argv.slice(2)
if (args.length === 0){
    console.error('please provide argument')
    process.exit(1)
}

const input = args[0]
const result = sentence(input)
console.log(result)