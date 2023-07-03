var countConsistentStrings = function(allowed, words) {
  let consistentLess = 0
for(let i = 0;i< words.length; i++)
{
    let j = 0
    while(j < words[i].length){
        if(!allowed.includes(words[i][j])){
            consistentLess++
            j = words[i].length
        }
        j++
    }
}

return words.length - consistentLess

};

console.log(countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"]))