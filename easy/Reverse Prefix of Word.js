var reversePrefix = function(word, ch) {
    let words=word.split("")
    let start=0
    let end=word.indexOf(ch)
    
    while(start<end){
        
        let str1=words[start]
        let str2=words[end]
        words[end]=str1
        words[start]=str2


    
        start++
        end--
    
    }
    
    

    return  words.join("")
    
    
        };



    console.log(reversePrefix("abcdefd",'d'))




















    // var reversePrefix = function(word, ch) {
    //     let words=word.split("")
    //     let start=0
    //     let end=word.indexOf(ch)
        
    //     while(start<end){
        
    //         [words[start],words[end]]=[words[end],words[start]]
    //         start++
    //         end--
        
    //     }
        
    //     return words.join("")
        
        
    //         };