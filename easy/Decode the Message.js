var decodeMessage = function(key, message) {
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let j = 0
const letters = new Map()
for(let i = 0; i < key.length ; i++ ){

if(key[i] !==" "){if(!letters.has(key[i])){
    letters.set(key[i],alphabetArray[j])
    j++
}}

}

let word = ''

for(let letter of message) {

if(letters.has(letter)) {
    word+= letters.get(letter)
}
else{
    word+=' '
}


}


return word
};


console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo","zwx hnfx lqantp mnoeius ycgk vcnjrdb"))