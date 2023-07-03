var wordPattern = function(pattern, s) {

const setPattern = [...new Set(pattern.split(''))]
const changed = []
let res = s.split(" ")
changed.push(res[0])
res[0] = setPattern[0]
let j = 0
for ( let i = 1 ; i < res.length; i++){
    if(setPattern[j]===undefined) break
    if(changed.indexOf(res[i])=== -1){
        j++
        changed.push(res[i])
        res[i] = setPattern[j]
    }
    else{
        res[i] = setPattern[changed.indexOf(res[i])]
    }
}

return res.join('') === pattern
};


console.log(wordPattern('abba', "dog cat cat dog"))

















// var wordPattern = function(pattern, s) {

//     const setPattern = [...new Set(pattern.split(''))]
//     let changed = ''
//     changed += s[0]
    
//     let res = s.replace(s[0],setPattern[0])
//     let j = 1
//     for(let i = 1 ; i < s.length ; i++){
//     if(s[i-1] !== " ") continue
//     if(setPattern[j]===undefined)break
//     if( changed.indexOf(s[i]) !== -1){ 
//     res = res.replace(s[i],setPattern[j])
//     }
    
//     else{
//     changed += s[i]
//     res = res.replace(s[i],setPattern[j])
//     j++}
//     console.log(changed,s[i])
//     }
    
    
//     return res
//     };