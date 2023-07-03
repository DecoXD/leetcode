var checkIfPangram = function(sentence) {
    let str = ''
for(let pos of sentence){
    if(!str.includes(pos)){
        str+=pos
    }

}
    return str.length === 26 ? true : false
};


console.log(checkIfPangram("abcdefghijklmnopqrstuvxzwy"))