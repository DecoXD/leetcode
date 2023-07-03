var countMatches = function(items, ruleKey, ruleValue) {
const keys=["type","color","name"]

ruleKey=keys.indexOf(ruleKey)

let left = 0
let right = items.length-1
let count = 0

for(left,right ; right >= left ; right -- ){
if(items[right][ruleKey] === ruleValue ){
    count++
}

if(right===left) break

if(items[left][ruleKey] === ruleValue){
    count++
}
left++
}
return count

};



console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver"))