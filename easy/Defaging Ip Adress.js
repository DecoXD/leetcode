// const showip =(ip)=>{

// }


const input = "1.1.1.1"
let letters=""

const res=input.split("").map(e=>{ if(e==="."){
   e=`[${e}]`
}
letters=""+ e
return letters
}).join("")

console.log(res)

