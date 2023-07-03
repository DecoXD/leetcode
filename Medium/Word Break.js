var wordBreak = function(s, wordDict) { //incompleto

let res = s

for(let word of wordDict){

if(res.includes(word)){

res = res.replace(word,'')

}

}
return res.length==0

};

console.log(wordBreak('leetcode',["leet","code"]))