// var isValid = function(s) {
// if(s.length <= 1) return false

// const char = {
// '{}':'',
// '()':'',
// '[]':''
// }

// let len = s.length 

// for(let i = 0 ;i < len ; i ++){
//     let current  = s[i]
//     let next = s[i + 1]  || 0 
    

// if(char.hasOwnProperty(current + s[len-1])) {
   
//         len-=1
//         continue}



// if(char.hasOwnProperty(current + next)) i++
// else{ 
// let interval = 0
// let j = i + 1 
// while(j < len){
//     if(char.hasOwnProperty(s[i] + s[j])){
//         break
      
//     }
   
//     interval ++
//     j++
// }
// console.log(interval)
// if(interval % 2 === 0 ) continue
// else{ i++}



// }
// if(!char.hasOwnProperty(current + next)){
//     console.log(i,'i')
//     return false
// }

// }
// return true 
// };

// console.log(isValid("[([[]])({[]})(){}]"))