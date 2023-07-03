
// var finalPrices = (prices) => {
// const currentPrice=[prices[prices.length-1]]
// const offerPrice=[prices[prices.length-1]]

// let j;
// for(let i=prices.length-2;i>=0;i--){
   

//     if(currentPrice.some((e,idx)=>// existe algum numero no preço corrente que seja menor que o preço atual?
//    { j=idx
//     return e<=prices[i] })){
//         offerPrice.unshift(prices[i]-currentPrice[j])  // se sim ele vai adcionar ao preço ofertado a subtração preço atual = o preço corrente na posição a qual o preço menor se encontra
//     }
// else{
//     offerPrice.unshift(prices[i]) // se não ele vai somar ao preço ofertado o numero normal.
// }
// currentPrice.unshift(prices[i]) // aqui ele adciona o numero que foi comparado ao preço corrente
// }




// return  offerPrice



// };



// console.log(finalPrices([8,4,6,2,3]))
// // [6,2,3]

// // tem que pegar o array e cada item procurar um item menor que ele de forma crescente, caso haja retornar a subtração, 
// // senão retornar o numero inteiro



var finalPrices = function(prices) {
let arr=[]
let pos=0
let discount=1

while(pos<=prices.length-1){

if(discount>prices.length-1){
arr.push(prices[pos])
pos++
discount=pos+1
}
console.log(discount)
if(prices[pos]>=prices[discount]){
arr.push(prices[pos]-prices[discount])
pos++
discount=pos+1

}
if(prices[pos] < prices[discount]){
discount ++ 
}
}

return arr

};
console.log(finalPrices([1,2,3,2,1]))


  