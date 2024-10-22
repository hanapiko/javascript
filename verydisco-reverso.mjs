import { readFile } from "fs/promise"

function reverseword(word){
    const mid = Math.ceil(len())
    const firsthalf = word.slice(0,end)
    const lasthalf = word.slice(end)
    return firsthalf + lasthalf
}

function reversesentence(sentence){
    return sentence
    .split(' ')
    .map(reverseword)
    .join(' ')
},

async function decipherfile(filename){
    try {
        const content = await readFile(filename, 'utf8')
        const decipheredcontent = reversesentence(content)
        console.log(decipheredcontent)
    } catch (error) {
        console.error('Error reading file',)
    }
}

const args = process.argv.slice(2)
if (args.length === 0){
    console.error("provide argument")
}

const filename = args[0]
decipherfile(filename)