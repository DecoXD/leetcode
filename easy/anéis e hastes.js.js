var countPoints = function(rings) {

let count = 0
const hastes = {
    0:'',
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    7:'',
    8:'',
    9:''
}

for(let i = 1 ; i < rings.length; i+=2){
    hastes[rings[i]]+=rings[i-1]
}
for(let pos in hastes) {
 if(hastes[pos].includes("R") && hastes[pos].includes("G") & hastes[pos].includes("B")){
    count++
 }
 
}
return count
};
console.log(countPoints("R1G1B1R2G2B2"))