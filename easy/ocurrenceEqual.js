var areOccurrencesEqual = function(s) {

const table = new Map()

for( let i = 0 ; i < s.length ; i++ ){

if(table.has(s[i])){
table.set(s[i],(table.get(s[i])+1))
    }    
if(!table.has(s[i])) {
table.set(s[i],1)

}

}
const res = new Set(table.values())


return res.size === 1 ? true : false

};
console.log(areOccurrencesEqual("aaabb"))