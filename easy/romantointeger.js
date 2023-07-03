var romanToInt = function(s) {
    
const roman = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

let result = 0

for( let i = 0 ;i < s.length ;i++ ){

let current = roman[s[i]]
let next = roman[s[i+1]] || 0 
console.log(result,current)
if(current < next) {
    result-= current
}
else{
    result+=current
}

}
return result


};

console.log(romanToInt("MCMXCIV"))




// var reverseString = function(s) {
//   let start=0
//   let end = s.length -1
// while(start < end) {
//     let temp = s[start]
//     s[start] = s[end]
//     s[end] = temp
//     start++
//     end--
// }
// return s
//     };

//     console.log(reverseString(["h","e","l","l","o"]))