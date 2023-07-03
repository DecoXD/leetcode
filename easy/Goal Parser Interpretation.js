var interpret = function(command) {
    let word=''
    for(let pos=0;pos<command.length;pos++)
    {
        if(command[pos]==="(" && command[pos+1]!='a')
        {
            word+="o"
        }
        else if(command[pos]===")"){
            word+=''
        }
        else if(command[pos]==="(" &&command[pos+1]==="a")
        {
            word+=''
        }
        else{
            word+=command[pos]
        }
       
    }
    return word
    };