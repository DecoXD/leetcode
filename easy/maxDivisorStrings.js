


function calcularMdc(n1,n2){
    let resto
    
    
    do{
    resto=n1%n2
    console.log('resto',resto)
    n1=n2
    console.log('n1',n1)
    n2=resto
    }while(resto!=0)
    return n1
    }

var gcdOfStrings = function(str1, str2) {
let bigger;
let small;


if(str1.length>=str2.length){
bigger=str1
small=str2
}
else{
    bigger=str2,
    small=str1
}

let check= bigger.includes(small)
let i = small.length
for(let pos=0;pos<bigger.length;pos+=i){
if(!small.includes(bigger.slice(pos,pos+i))){
    return ''
}
};

const res= str1.slice(0,calcularMdc(str1.length,str2.length))

return res
}

// console.log(gcdOfStrings("ABCABC","ABC")) //OK PRIMEIRO CHECAR SE O MENOR ESTÁ INCLUSO NO MAIOR
// console.log(gcdOfStrings("ABCDEF","ABC"))//
// console.log(gcdOfStrings("ABCABCABC","ABCAAA"))//chekcar se o array é concatenação de si mesmo // pegar o length -1 do menor e usar no slice

