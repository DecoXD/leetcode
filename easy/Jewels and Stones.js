// var numJewelsInStones = function(jewels, stones) {
//     if(!stones.includes(jewels)){
// return 0
//     }
// let total=0
//     for(let pos=0;pos<stones.length;pos++){


//         if(jewels.includes(stones[pos])){

// total+=1
//         }
     
//     }
//     return total
// }





var numJewelsInStones = function(jewels, stones) {

const joias = new Map ()
let count = 0 
for(let jewel of jewels){
if(!joias.has(jewel))joias.set(jewel,1)

}

for(let stone of stones){
    if(joias.has(stone)) count++
}

return count
}
console.log(numJewelsInStones("aAaE","aEabA"))


