var sortPeople = function(names, heights) {

let persons =  {}
const arr = []
for( var i in heights) {

   persons[heights[i]]= names[i]

}
    
heights.sort((a,b) => b-a)

for(let pos of heights){
   arr.push(persons[pos])
}

return arr
};


console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))