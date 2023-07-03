
// const isPalindrome=(str)=>{
// let left=0
// let right=str.length-1

//   while(left<=right){
//    if(str[left]!= str[right]) return false

//    left++
//    right--
   
//   }
//   return true
// }


var removePalindromeSub = function(s) {
let str=s.split('')
let left=0
let right=str.length-1
let count=0

  while(left<=right){
    console.log(str)
   if(str[left]!= str[right]) {
    str.splice(right,1)
    count++
    right--
   }
else{
    left++
   right--
}
 
   
  }

if(count==0){
  return 1
}

 const res=str.length>1? 2 : count
 
 return res


};

// ababa
console.log(removePalindromeSub("aba"))


