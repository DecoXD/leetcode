// //arr

// var twoSum = function (nums, target) {

// const arr=[]

// for(let pos =0;pos<nums.length;pos++){
// const max=target-nums[pos]
//     if(arr.indexOf(max)!==-1){

//         return [pos,arr.indexOf(max)]
//     }
// arr.push(nums[pos])

// }


//  }
// console.log(twoSum([3,2,3], 6))


// //obj

// var twoSum = function (nums, target) {

//     const obj={}
    
//     for(let pos =0;pos<nums.length;pos++){
    
//     const max= target-nums[pos]
//     if(max in obj){
//     return [pos,obj[max]]
//     }
//     obj[nums[pos]]=pos
//     }
    
    
//      }
//     console.log(twoSum([2,7,11,15], 9))











var twoSum = function (nums, target) {
    const val = new Map ()
    
 for (let i = 0 ; i < nums.length ; i++){
let max = target - nums[i]
if(val.has(max)) return [i,val.get(max)]
val.set(nums[i],i)

 }
    
    
     }

     console.log(twoSum([2,7,11,15],9))