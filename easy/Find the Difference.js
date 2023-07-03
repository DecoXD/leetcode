var findTheDifference = function(s, t) {

const tLetters ={
    
}
const sLetters ={

}


for( let i = 0 ;i < t.length ;i++){

if(!tLetters.hasOwnProperty(t[i]) ){
    tLetters[t[i]] = 1

    }
    if(tLetters.hasOwnProperty(t[i])){
            tLetters[t[i]] +=1
            
        }
    
if(i>=s.length) continue
            if(!sLetters.hasOwnProperty(s[i])){
                sLetters[s[i]] = 1

                }
            if(sLetters.hasOwnProperty(s[i])){
                sLetters[s[i]]+=1
               
            }
           
        

    }

for( let pos in tLetters){
if(   sLetters[pos] != tLetters[pos]){
    return pos
}}
};


