var mostWordsFound = function(sentences) {
    
let biggest=0

sentences.map((str)=>{
    const big=str.split(" ").length
if(big>biggest){
    biggest=big
   
}
})
return biggest

};


const users=
    {
        name:'andré',
        age:'24',

        logar:()=>{
            
            return users.name
        }
    }




console.log(users.logar())

console.log(mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much asd asd"]))