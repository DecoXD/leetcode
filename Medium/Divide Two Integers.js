var numJewelsInStones = function(jewels, stones) {

let count = 0 
for( let pos of stones){
    if(jewels.indexOf(pos) != -1)count++
}

return count
}

console.log(numJewelsInStones("aA","aAAbbbb"))