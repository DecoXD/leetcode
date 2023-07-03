var canConstruct = function(ransomNote, magazine) {

const notes = {}
const mag = {}



for(let i = 0 ; i < magazine.length ; i++){
if(mag.hasOwnProperty(magazine[i])){
    mag[magazine[i]] += 1
    continue
}
mag[magazine[i]] = 1
}

for(let i = 0 ; i < ransomNote.length ; i++)
{
    if(notes.hasOwnProperty(ransomNote[i])){
        notes[ransomNote[i]] += 1
        continue
    }
    notes[ransomNote[i]] = 1
}

for( let pos in notes){
  if(mag[pos]=== undefined || notes[pos] >  mag[pos]) return false

}

return true

};


console.log(canConstruct('a','b'))