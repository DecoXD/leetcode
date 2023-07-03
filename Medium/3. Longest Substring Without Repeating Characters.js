// var lengthOfLongestSubstring = function(s) {

// if(s.length===1) return 1

// let count=0
// let left=0
// let word=s[left]
// let right=1

// while(left<s.length-1){

// if(right>s.length-1) break




// if(!word.includes(s[right])){
// word+=s[right]
// right++
// }

// if(word.length>count){
//     count=word.length
// }
 
// if(word.includes(s[right])){
//     left++
//     word=s[left]
//     right=left+1
// }

// }
// return count
// };




















var lengthOfLongestSubstring = function(s) {

    if(s.length===1) return 1
    
    let count=0
    let left=0
    let right=1
    let word=s[left]
    while(left<s.length-1){
    if(right>s.length-1) break
  
    if(!word.includes(s[right])){
   
    word+=s[right]
    right++
    }
    // "dvdf"
 
    if(word.length>count){
        count=word.length
    }
     
    if(word.includes(s[right])){
        left++
           
        word=s.substring(left,right)
        
    }
    
    }
    return count
    };
    

















console.log(lengthOfLongestSubstring( "abcbb"))