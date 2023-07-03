var defangIPaddr = function(address) {

let res = ''
for ( let letter of address){
    if(letter =='.'){
        res+='[.]'
    }
    else{
        res+=letter
    }
}
return res
}


console.log(defangIPaddr( "255.100.50.0"))


// var defangIPaddr = function(address) {

//     return address.replaceAll('.',"[.]")
    


// };