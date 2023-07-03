var uniqueMorseRepresentations = function(words) {
const decode = {
    "a": '.-',
    "b": '-...',
    "c": '-.-.',
    "d": '-..',
    "e": '.',
    "f": '..-.',
    "g": '--.',
    "h": '....',
    "i": '..',
    "j": '.---',
    "k": '-.-',
    "l": '.-..',
    "m": '--',
    "n": '-.',
    "o": '---',
    "p": '.--.',
    "q": '--.-',
    "r": '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..'
  }
let word = ''
let j = 0
for(let i = 0 ; i < words.length ; i++){

while(j < words[i].length){
word +=decode[words[i][j]]
j++
}
words[i] = word
j=0
word=''
}
const res = new Set(words)

return res

};

console.log(uniqueMorseRepresentations(["rwjje","aittjje","auyyn","lqtktn","lmjwn"]))